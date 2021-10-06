import { Exclude } from 'class-transformer';
import { BaseEntity } from '../../shared/base-entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  created_at: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column()
  public password: string;

  @Exclude()
  public currentHashedRefreshToken?: string;
}

export default User;
