import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {AuthSchema} from './schemas/auth.schema';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Auths', schema: AuthSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
