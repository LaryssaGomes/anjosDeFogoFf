import { BaseEntity } from '../../shared/base-entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'squad' }) // Definindo nome da tabela
export class Squad {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  created_at: string;

  @Column({ nullable: false }) // Não pode ser nulo
  name: string;

  @Column({ nullable: false })
  kill: string;

  @Column({ nullable: false })
  spots: string;
}
