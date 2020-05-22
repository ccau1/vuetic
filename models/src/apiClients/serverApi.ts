import { Api, ApiConfig } from "../lib/Api";
import LoggerInterceptor from "../lib/ApiInterceptors/LoggerInterceptor";

const config: ApiConfig = {
  baseURL: "http://localhost:3000/",
  debug: true,
  interceptors: [LoggerInterceptor]
};

export default new Api(config);
