import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo obrigatório name' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo obrigatório' })
  @MinLength(7)
  password: string;
}

export default CreateUserDto;
