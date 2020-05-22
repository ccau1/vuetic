import { AxiosRequestConfig, AxiosResponse } from "axios";
export type ApiInterceptorError = any;

export interface ApiInterceptorFactory {
  new (): ApiInterceptor;
}

interface ApiInterceptor {
  debugOnly: boolean;
  request?(
    config: AxiosRequestConfig
  ): AxiosRequestConfig | Promise<AxiosRequestConfig>;
  response?(
    response: AxiosResponse
  ): AxiosResponse<any> | Promise<AxiosResponse<any>>;
  whenError?(error: ApiInterceptorError): void;
}
export default ApiInterceptor;
