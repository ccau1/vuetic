import { AxiosResponse } from "axios";
import ApiInterceptor, { ApiInterceptorError } from "./ApiInterceptors";

class LoggerInterceptor implements ApiInterceptor {
  debugOnly = true;
  response = (
    response: AxiosResponse
  ): AxiosResponse | Promise<AxiosResponse> => {
    if (response.status) console.log(response);
    return response;
  };
  whenError(error: ApiInterceptorError) {
    return Promise.reject(error);
  }
}
export default LoggerInterceptor;
