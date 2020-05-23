import { create, ApisauceInstance } from "apisauce";
import TokenManager from "./TokenManager";
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

interface ApiSauce {
  [key: string]: any;
}

export class Api implements ApiSauce {
  protected config: ApiConfig = { baseURL: "" };
  protected api?: ApisauceInstance;
  protected tokenManager?: TokenManager;
  constructor(config: ApiConfig) {
    // Save constructor parameters
    this.setConfig({
      ...this._getDefaultConfig(),
      ...config
    });
    this.setTokenManager(new TokenManager());
    // this.requestInterceptors = [];
    // this.resonseInterceptors = [];

    //init api
    this._initApi();
  }

  public setTokenManager(tokenManager: TokenManager): Api {
    this.tokenManager = tokenManager;
    this.tokenManager.setConfig(this.getConfig());
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

  protected _getDefaultConfig() {
    return {
      interceptors: []
    };
  }

  protected _initApi(): Api {
    const config = this.getConfig();
    this.api = create(config);
    for (const name in this.api) {
      if (this.api.hasOwnProperty(name)) {
        Object.defineProperty(this, name, {
          get: () => {
            return (this.api as any)?.[name];
          },
          set: (value: any) => {
            if (this.api && (this.api as any)?.[name] !== value) {
              (this.api as any)[name] = value;
            }
          }
        });
      }
    }

    this.injectInterceptors(config.interceptors);

    return this;
  }
}
