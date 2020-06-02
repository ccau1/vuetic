import BaseTokenManager from "./BaseTokenManager";
import { UserToken } from "@/typings";
import Cookies from "js-cookie";

export default class TokenManager extends BaseTokenManager {
  protected token: UserToken | null = null;
  protected defaultStorageName = "token_manager";

  public start() {
    this.token = this.getToken();
    return this;
  }

  /**
   * Get token from cookie
   */
  public getToken(): UserToken {
    const config = this.getConfig();
    if (this.token) return this.token;
    // get token from cookie
    const cookieToken = Cookies.get(
      config.storageName || this.defaultStorageName
    );
    // return cookie object or undefined
    return cookieToken ? JSON.parse(cookieToken) : undefined;
  }

  public setToken(userToken: UserToken | null) {
    // get config
    const config = this.getConfig();
    // save token and expireAt to local variable
    this.token = userToken;
    if (!userToken) {
      // remove user token from cookie
      Cookies.remove(config.storageName || this.defaultStorageName);
      // notify all listeners this user is unauthenticated
      this.notifyUnAuthenticate();
    } else {
      const { expiresIn } = userToken;
      // timestamp from seconds to days
      const expireDays = expiresIn / 60 / 60 / 24;
      // set Token to cookie
      Cookies.set(config.storageName || this.defaultStorageName, userToken, {
        expires: expireDays
      });
      // notify all listeners this user is authenticated
      this.notifyAuthenticated();
    }
  }

  public hasToken() {
    return Boolean(this.getToken());
  }

  public getAccessToken() {
    const token = this.getToken();
    return token ? token.accessToken : "";
  }

  public clearToken() {
    const config = this.getConfig();
    Cookies.remove(config.storageName || this.defaultStorageName);
    this.token = null;
    this.notifyUnAuthenticate();
    return this;
  }
  public isAuthenticated() {
    // ensure: token exists, access_token exists and expires_on has not expire yet
    return Boolean(
      this.token &&
        this.token.accessToken &&
        // timestamp expires_on
        this.token.expiresOn > new Date().valueOf()
    );
  }
}
