export interface AuthUserTokenModel {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  expires_on: number;
}