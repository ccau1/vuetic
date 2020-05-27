import { create, ApisauceInstance } from "apisauce";
import TokenManager, { TokenManagerConfig } from "./TokenManager";
import ApiInterceptor, {
  ApiInterceptorFactory
} from "./ApiInterceptors/ApiInterceptors";

export interface ApiConfig {
  baseURL: string;
  resetToken?: {
    enable?: boolean;
    url?: string;
  };
  debug?: boolean;
  interceptors?: ApiInterceptorFactory[];
}

export class Api {
  protected config: ApiConfig = { baseURL: "" };
  protected api: ApisauceInstance = create({ baseURL: "" });
  protected tokenManager?: TokenManager;
  constructor(config: ApiConfig) {
    // Save constructor parameters
    this.setConfig({
      ...this._getDefaultConfig(),
      ...config
    });
    this.setTokenManager(new TokenManager());
    this.setTokenConfig({});
    // this.requestInterceptors = [];
    // this.resonseInterceptors = [];

    //init api
    this._initApi();
  }

  public setTokenConfig(tokenConfig: TokenManagerConfig): Api {
    this.tokenManager?.setConfig(tokenConfig);
    return this;
  }

  public setTokenManager(tokenManager: TokenManager): Api {
    this.tokenManager = tokenManager;
    this.tokenManager.start();
    return this;
  }

  public getTokenManager(): TokenManager | undefined {
    return this.tokenManager;
  }

  public setConfig(config: ApiConfig): Api {
    this.config = config;
    return this;
  }

  public getConfig(): ApiConfig {
    return this.config;
  }

  public injectInterceptors(interceptors?: ApiInterceptorFactory[]): Api {
    const config = this.getConfig();
    if (!this.api?.axiosInstance.interceptors) {
      // api not setup, throw error
      throw new Error("api not setup");
    }
    const axiosInterceptors = this.api?.axiosInstance.interceptors;

    (interceptors || config.interceptors)?.map(
      (Interceptor: ApiInterceptorFactory) => {
        const interceptor: ApiInterceptor = new Interceptor();
        if (!config.debug && interceptor.debugOnly) return;
        if (interceptor.request) {
          axiosInterceptors.request.use(
            interceptor.request,
            interceptor.whenError
          );
        }
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

  public get = this.api?.get;
  public put = this.api?.put;
  public post = this.api?.post;
  public delete = this.api?.delete;
  public head = this.api?.head;
  public patch = this.api?.patch;
  public link = this.api?.link;
  public unlink = this.api?.unlink;
  public getBaseURL = this.api?.getBaseURL;

  protected _getDefaultConfig() {
    return {
      interceptors: []
    };
  }

  protected _initApi(): Api {
    const config = this.getConfig();
    this.api = create(config);
    this.injectInterceptors(config.interceptors);

    return this;
  }
}
