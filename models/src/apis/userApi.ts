import serverApi from "../apiClients/serverApi";

export const getCurrentUser = async () =>
  (await serverApi.get("users/me")).data;
