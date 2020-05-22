import { Api, ApiConfig } from "../lib/Api";

const config: ApiConfig = {
  baseURL: "http://localhost:3000/"
};

export default new Api(config);
