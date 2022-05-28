import {
  Controller,
  Get,
  Post,
  Request,
} from '@nestjs/common';


import { User } from 'src/models/user/user.entity';
import { UserService } from 'src/services/user/user.service';

// @UseGuards(AuthGuard('jwt'))
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async index(@Request() request): Promise<User[]> {
    return this.userService.getUser();
  }

  @Post()
  async store(@Request() request): Promise<User>{
    return this.userService.storeUser(request.body);
  }
  
}