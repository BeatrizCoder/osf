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
  @Post('/create-account')
  create(@Body() data: CreateUserDto): Promise<User> {
    return this.service.create(data);
  }
  @Delete('/delete/:id')
  async delete(@Param(id) id: number) {
    return this.service.deleteOneUser({ id: Number(id) });
  }
}
