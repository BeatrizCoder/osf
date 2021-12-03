import { Injectable,NotFoundException,ConflictException } from '@nestjs/common';
import{User, Prisma} from '.prisma/client'
import{PrismaService} from 'src/prisma/prisma.service';
import * as bcypt from 'bcrypt';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
    constructor(private db:PrismaService){}

async createUser(data:CreateUserDto):Promise<User>{
    const existing=await this.db.user.findUnique({
        where:{cpf: data.cpf},
    });

    if (existing){
        throw new ConflictException('Este CPF já é cadastrado em nosso sistema');
    }
    const hashedPassword= await bcypt.hash(data.password, 8);

    const user=await this this.db.user.create({
        data:{
            ..data,
            password:hashedPassword,
        },
    });
    return user;
} 
async findUniqueUser(id:number):Promise<User>{
    const user=await this.db.user.findUnique({

    })

     if (!user){
         throw new NotFoundException('User nao foi encontrado');
    }
return await this.db.user.update({
});
async deleteUser(id:number):Promise<User>{
    const user=await this this.db.user.findUnique({
    });
