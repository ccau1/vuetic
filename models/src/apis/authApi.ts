import serverApi from "../apiClients/serverApi";
import { UserToken } from "@/typings";

export const getUserToken = async (
  input: string,
  password: string
): Promise<UserToken> =>
  (await serverApi.post("auth/token", { input, password })).data as UserToken;

export const refreshToken = async (refreshToken: string): Promise<UserToken> =>
  (await serverApi.post(`auth/token?refresh-token=${refreshToken}`))
    .data as UserToken;
