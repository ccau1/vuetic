import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { AuthModel } from "./interfaces/Auth";
import { UserService } from "../User/user.service";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthUserTokenModel } from "./models/auth.userToken.model";
// import { AuthCreateModel } from "./models/auth.create.model";
// import { AuthUpdateModel } from "./models/auth.update.model";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Auths') private readonly authRepository: AuthModel,
    private readonly userService: UserService
  ) {
    
  }

  protected async createUserToken(userId: string, options?: {accessTokenExpiresIn?: number, refreshTokenExpiresIn?: number}): Promise<AuthUserTokenModel> {
    const opts = {
      // default access to 1 day (seconds)
      accessTokenExpiresIn: 86400,
      // default refresh to 30 days (seconds)
      refreshTokenExpiresIn: 2592000,
      ...options
    };

    const currentTime = new Date().valueOf() / 1000;

    const access_token = jwt.sign({
      sub: userId,
      iat: currentTime,
      exp: currentTime + opts.accessTokenExpiresIn
    }, process.env.JWT_KEY, {algorithm: 'RS256'});

    // FIXME: same as access_token?
    const refresh_token = jwt.sign({
      sub: userId,
      iat: currentTime,
      exp: currentTime + opts.refreshTokenExpiresIn
    }, process.env.JWT_KEY, {algorithm: 'RS256'});

    return {
      access_token,
      refresh_token,
      expires_in: opts.accessTokenExpiresIn,
      expires_on: currentTime + opts.accessTokenExpiresIn
    };
  }

  public async getUserToken(input: string, password: string): Promise<AuthUserTokenModel> {
    const user = await this.userService.findOne({verifyField: input});
    if (!user) {
      throw new Error('user not found');
    }
    const auth = await this.authRepository.findOne({user: user._id.toHexString()});
    if (!auth) {
      throw new Error('auth not found');
    }
    if (!bcrypt.compare(password, auth.password)) {
      throw new Error('incorrect password');
    }

    // all passed, return user token
    return this.createUserToken(user._id.toHexString());
  }

  public async refreshUserToken(accessToken: string, refreshToken: string) {
    const decoded = jwt.decode(accessToken);
    
    const user = await this.userService.findOne({_ids: [decoded.sub]});

    const auth = await this.authRepository.findOne({
      user: user._id.toHexString(),
      refreshTokens: {
        $elemMatch: {
          code: refreshToken,
          expireAt: {$gt: new Date()}
        }
      }
    });

    return this.createUserToken(user._id.toHexString());
  }
}