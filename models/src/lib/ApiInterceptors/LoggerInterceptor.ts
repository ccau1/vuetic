import { AxiosResponse } from "axios";
import ApiInterceptor, { ApiInterceptorError } from "./ApiInterceptors";

class LoggerInterceptor implements ApiInterceptor {
  constructor() {}
  debugOnly: boolean = true;
  response = (
    response: AxiosResponse<any>
  ): AxiosResponse<any> | Promise<AxiosResponse<any>> => {
    if (response.status) console.log(response);
    return response;
  };
  whenError(error: ApiInterceptorError) {
    return Promise.reject(error);
  }
}
export default LoggerInterceptor;
