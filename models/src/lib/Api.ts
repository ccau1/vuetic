import { create, ApisauceInstance } from "apisauce";
import TokenManager from "./TokenManager";

export interface ApiConfig {
  baseURL: string;
  resetToken?: {
    enable?: boolean;
    url?: string;
  };
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

  protected _getDefaultConfig() {
    return {};
  }

  protected _initApi(): Api {
    const that = this;
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

    console.log("inited", this);

    return this;
  }
}
