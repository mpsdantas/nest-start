import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { UserInterface } from '../interfaces/user.interface';
import { BaseService } from "../../shared/services/base.service";

@Injectable()
export class UserService extends BaseService<UserInterface>{
  constructor(
    @InjectModel('User')
    protected userModel: Model<UserInterface & Document>,
  ) {
    super(userModel);
  }
}