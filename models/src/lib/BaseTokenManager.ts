import { UserToken } from "@/typings";

export interface TokenManagerConfig {
  storageName?: string;
  storageExpire?: number;
}

export default class BaseTokenManager {
  protected tokenAuthenticatedObserverList: Array<() => void> = [];
  protected tokenUnAuthenticateObserverList: Array<() => void> = [];
  protected config: TokenManagerConfig = {};
  protected token: UserToken | null = null;

  constructor(config?: TokenManagerConfig) {
    this.config = config || {};
  }

  setConfig(config: TokenManagerConfig) {
    this.config = config;
  }
  getConfig() {
    return this.config;
  }
  start() {
    return this;
  }
  setToken(token: UserToken) {
    this.token = token;
  }

  on(name: "authenticated" | "unAuthenticated", callback: () => void) {
    if (
      name === "authenticated" &&
      !this.tokenAuthenticatedObserverList.includes(callback)
    ) {
      this.tokenAuthenticatedObserverList.push(callback);
    }
    if (
      name === "unAuthenticated" &&
      !this.tokenUnAuthenticateObserverList.includes(callback)
    ) {
      this.tokenUnAuthenticateObserverList.push(callback);
    }
  }
  // remove(name: "authenticated" | "unAuthenticated", callback: () => void) {
  //   // TODO
  // }

  notifyUnAuthenticate() {
    this.tokenUnAuthenticateObserverList.forEach(fun => fun());
  }
  notifyAuthenticated() {
    this.tokenAuthenticatedObserverList.forEach(fun => fun());
  }
  getToken() {
    return this.token;
  }

  hasToken() {
    return false;
  }

  getAccessToken() {
    return "";
  }

  clearToken() {
    return this;
  }
  isAuthenticated() {
    return false;
  }
}
