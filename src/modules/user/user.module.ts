import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.model';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { SharedModule } from '../shared/shared.module';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    SharedModule
  ],
  providers: [
      UserController,
      UserService
  ],
  controllers: [UserController],
  exports: [],
})
export class UserModule {}