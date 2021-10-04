import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo obrigatório' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo obrigatório' })
  @MinLength(7)
  password: string;
}

export default RegisterDto;
