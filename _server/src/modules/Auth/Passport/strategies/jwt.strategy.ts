import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

// Interfaces & Services
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../../../modules/User/interfaces/User';
import { mockUser } from '../../../User/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // FIXME: can't inject user repository?
    // constructor(@InjectModel('Users') private readonly userRepository: User) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
      ignoreExpiration: false,
      passReqToCallback: true,
    });
  }

  async validate(req: any, jwtpayload: JwtPayload, done: any): Promise<any> {
    try {
      // TODO: get user by jwtpayload.sub (userId) and validate

      if (jwtpayload.sub !== mockUser._id.toHexString()) {
        throw new NotFoundException({
          code: 'data__not_exists',
          payload: {
            key: 'key_user',
          },
        });
      }

      return done(null, { ...mockUser });
    } catch (error) {
      return done(
        new UnauthorizedException({ code: 'err_unauthorized' }),
        false,
      );
    }
  }
}
