import {
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  created_at: string;
}
