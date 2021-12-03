import { IsString, IsNotEmpty, IsNumber, Lengh } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  regiao: string;

  @IsNumber()
  @IsNotEmpty()
  cpf: number[];
}
