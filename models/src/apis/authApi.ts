import serverApi from "../apiClients/serverApi";

export const getUserToken = async (input: string, password: string) =>
  serverApi.post("auth/token", { input, password }).data;

export const refreshToken = async (refreshToken: string) =>
  serverApi.post(`auth/token?refresh-token=${refreshToken}`).data;
