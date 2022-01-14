import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/Todo';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/Auth/auth.module';
import { UserModule } from './modules/User/user.module';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './modules/Category/category.module';
import { PostModule } from './modules/Post/post.module';
import mongoUrlBuilder from './core/mongo/mongoUrlBuilder';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(mongoUrlBuilder(), {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      connectionName: 'Database',
    }),
    TodoModule,
    AuthModule,
    UserModule,
    CategoryModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
