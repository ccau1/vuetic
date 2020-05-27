export interface TokenManagerConfig {
  cookieName?: string;
  cookieExpire?: number;
}

export default class TokenManager {
  protected _config: TokenManagerConfig = {};
  public setConfig(config: TokenManagerConfig) {
    this._config = config;
  }

  public start() {
    return null;
  }
}
