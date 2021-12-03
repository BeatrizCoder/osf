import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UserService, UsersService],
  controllers: [UsersController],
})
export class UserModule {}
