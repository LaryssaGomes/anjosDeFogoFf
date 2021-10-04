import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SquadModule } from './squad/squad.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],

      useFactory: (configService: ConfigService) =>
        configService.get('bankOptions'),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    SquadModule,
  ],
})
export class AppModule {}
