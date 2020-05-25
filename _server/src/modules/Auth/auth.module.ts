import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthSchema } from './schemas/auth.schema';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../User/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Auths', schema: AuthSchema }]),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
