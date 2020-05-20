import { Controller, Post, Body, Query, Headers } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthCredentialModel } from "./models/auth.credential.model";


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {

  }
  
  @Post('/token')
  public async getUserToken(@Body() credentials: AuthCredentialModel) {
    return this.authService.getUserToken(credentials.input, credentials.password);
  }
  
  @Post('/refresh-token')
  public async getUserTokenByRefreshToken(@Query('token') refreshToken: string, @Headers('Authorization') authorization: string) {
    return this.authService.refreshUserToken(authorization.replace(/^(B|b)earer /, ''), refreshToken);
  }
}