import { Controller, Get, Body, Post, Param, Delete } from '@nestjs/common';
import { identity } from 'rxjs';
import { User, Prisma } from './prisma/client';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users/users.service';

@Controller('users')
export class usersController {
  constructor(private service: UsersService) {}

  @Get(':id')
  findUnique(@Param('id') id: number): Promise<User> {
    return this.Service.findUnique(id);
  }
  @Post('/create')
   async createUser(@Body() CreateUser: CreateUserDto): Promise<User> {
    return this.service.create(this.createUser);
  }
  @Delete('/delete/:id')
  adeleteUser(@Param('id') id: number):Promise<User> {
    return this.service.deleteUser(id);
  }
}
