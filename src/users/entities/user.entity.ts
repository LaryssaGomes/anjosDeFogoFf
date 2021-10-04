import { BaseEntity } from 'src/shared/base-entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User extends BaseEntity {
  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column()
  public password: string;
}

export default User;
