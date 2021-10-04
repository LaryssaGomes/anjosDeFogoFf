import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Squad } from './entities/squad.entity';
import { SquadController } from './controllers/squad.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Squad])],
  controllers: [SquadController],
})
export class SquadModule {}
