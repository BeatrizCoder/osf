import { Injectable,NotFoundException,ConflictException } from '@nestjs/common';
import{User, Prisma} from '.prisma/client'
import{PrismaService} from '../prisma.service';
import * as bcypt from 'bcrypt';
import { create } from 'domain';

@Injectable()
export class UsersService {
    constructor(private db:PrismaService){}

    async findMany():Promise<User>[]>{
        return this. db.user.findMany();
    }
    async findUnique (id:number):Promise<User>{
        const user=await this.db.user.findUnique({
            where:{ id },
        });
        if (!user){
            throw new NotFoundException();
        }
        return user;
    }
    async create(data:Prisma.UserCreateInput):Promise<User>{
        const existing=await this.db.user.findUnique({
            where:{username:DataTransfer,username},
        });
        if (existing){
            throw new ConflictException('username already exists in this system')
        }
        const hashedPassword= await bcypt.hash(data,password,8);

        const user=await this.db.user.create({
            data:{
                ..data,
                senha:hashedPassword,
            },
        });
        return user;  
    }
    async deleteOneUser(where:Prisma.tweetWhereUniqueInput):Promise<User>{
        return this.db.user({where});
    }
        
    }

