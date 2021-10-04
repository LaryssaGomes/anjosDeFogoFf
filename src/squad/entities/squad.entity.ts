import { BaseEntity } from 'src/shared/base-entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'squad' }) // Definindo nome da tabela
export class Squad extends BaseEntity {
  @Column({ nullable: false }) // Não pode ser nulo
  name: string;

  @Column({ nullable: false })
  kill: string;

  @Column({ nullable: false })
  spots: string;
}
