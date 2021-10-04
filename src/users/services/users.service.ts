import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RegisterDto from 'src/auth/dtos/register.dto';
import { Repository } from 'typeorm';
import CreateUserDto from '../dtos/createUser.dto';
import User from '../entities/user.entity';
// Indica que o gerenciamento  da classe e feito pelo contêiner Nest IoC
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async getByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async create(userData: RegisterDto) {
    const newUser = await this.usersRepository.create(userData);
    this.usersRepository.save(newUser);
    return newUser;
  }

  async getById(id: string) {
    const user = await this.usersRepository.findOne({ id });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async lista(): Promise<RegisterDto[]> {
    return await this.usersRepository.find();
  }
}
