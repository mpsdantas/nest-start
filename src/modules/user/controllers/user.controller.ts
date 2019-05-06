import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { InputUser } from '../interfaces/inputUser.interface';
import { UserInterface } from '../interfaces/user.interface';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() inputUser: InputUser): Promise<UserInterface> {
    return this.userService.create(inputUser);
  }
}