import { create, ApisauceInstance, ApiResponse } from "apisauce";
import TokenManager, { TokenManagerConfig } from "./TokenManager";
import ApiInterceptor, {
  ApiInterceptorFactory
} from "./ApiInterceptors/ApiInterceptors";
import { AxiosRequestConfig } from "axios";

export interface ApiConfig {
  baseURL: string;
  resetToken?: {
    enable?: boolean;
    url?: string;
  };
  debug?: boolean;
  interceptors?: ApiInterceptorFactory[];
  token?: TokenManagerConfig;
}

export class Api {
  protected config: ApiConfig = { baseURL: "" };
  protected api: ApisauceInstance;
  protected tokenManager?: TokenManager;

  constructor(config: ApiConfig) {
    // Save constructor parameters
    this.setConfig({
      ...this._getDefaultConfig(),
      ...config
    });
    // create and set token manager
    this.setTokenManager(new TokenManager());
    // define token config
    this.setTokenConfig(this.config.token || {});
    // instantiate api
    this.api = create(config);
    console.log("this.api", this.api);

    // define api calls inherited from axios'
    this.get = this.api.get;
    this.delete = this.api.delete;
    this.head = this.api.head;
    this.post = this.api.post;
    this.put = this.api.put;
    this.patch = this.api.patch;
    this.link = this.api.link;
    this.unlink = this.api.unlink;

    // inject interceptors from config to api
    this.injectInterceptors(this.config.interceptors);
  }

  public get: <T, U = T>(
    url: string,
    params?: {},
    axiosConfig?: AxiosRequestConfig
  ) => Promise<ApiResponse<T, U>>;
  public delete: <T, U = T>(
    url: string,
    params?: {},
    axiosConfig?: AxiosRequestConfig
  ) => Promise<ApiResponse<T, U>>;
  public head: <T, U = T>(
    url: string,
    params?: {},
    axiosConfig?: AxiosRequestConfig
  ) => Promise<ApiResponse<T, U>>;
  public post: <T, U = T>(
    url: string,
    // eslint-disable-next-line
    data?: any,
    axiosConfig?: AxiosRequestConfig
  ) => Promise<ApiResponse<T, U>>;
  public put: <T, U = T>(
    url: string,
    // eslint-disable-next-line
    data?: any,
    axiosConfig?: AxiosRequestConfig
  ) => Promise<ApiResponse<T, U>>;
  public patch: <T, U = T>(
    url: string,
    // eslint-disable-next-line
    data?: any,
    axiosConfig?: AxiosRequestConfig
  ) => Promise<ApiResponse<T, U>>;
  public link: <T, U = T>(
    url: string,
    params?: {},
    axiosConfig?: AxiosRequestConfig
  ) => Promise<ApiResponse<T, U>>;
  public unlink: <T, U = T>(
    url: string,
    params?: {},
    axiosConfig?: AxiosRequestConfig
  ) => Promise<ApiResponse<T, U>>;

  public setTokenConfig(tokenConfig: TokenManagerConfig): Api {
    // set token manager's config
    this.tokenManager?.setConfig(tokenConfig);
    // return this for chaining
    return this;
  }

  public setTokenManager(tokenManager: TokenManager): Api {
    // set token manager
    this.tokenManager = tokenManager;
    // start the token manager
    this.tokenManager.start();
    // return this for chaining
    return this;
  }

  public getTokenManager(): TokenManager | undefined {
    // return current token manager instance
    return this.tokenManager;
  }

  public setConfig(config: ApiConfig): Api {
    // store config to local variable
    this.config = config;
    return this;
  }

  public getConfig(): ApiConfig {
    // get current instance's config
    return this.config;
  }

  public injectInterceptors(interceptors?: ApiInterceptorFactory[]): Api {
    // get instance's config
    const config = this.getConfig();
    // if api or its interceptors array does not exists
    if (!this.api?.axiosInstance.interceptors) {
      // api not setup, throw error
      throw new Error("api not setup");
    }
    // create pointer to api's interceptors array
    const axiosInterceptors = this.api?.axiosInstance.interceptors;
    // go through each config's interceptors
    (interceptors || config.interceptors || [])?.map(
      (Interceptor: ApiInterceptorFactory) => {
        // create instance of the interceptor
        const interceptor: ApiInterceptor = new Interceptor();
        // if api is not in debug mode and interceptor only allows
        // debug mode, return so we don't add it in
        if (!config.debug && interceptor.debugOnly) return;
        // if interceptor has request function, add to axios' request list
        if (interceptor.request) {
          axiosInterceptors.request.use(
            interceptor.request,
            interceptor.whenError
          );
        }
        // if interceptor has response function, add to axios' response list
        if (interceptor.response) {
          axiosInterceptors.response.use(
            interceptor.response,
            interceptor.whenError
          );
        }
      }
    );

    return this;
  }

  // define default config
  protected _getDefaultConfig() {
    return {
      interceptors: []
    };
  }
}
