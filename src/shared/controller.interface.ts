import { BaseEntity } from './base-entity';

export interface IController<TEntity extends BaseEntity> {
  add(dto: any): Promise<TEntity>;
  findOne(id: string): Promise<TEntity>;
  findAll(): Promise<TEntity[]>;
  remove(id: string): Promise<any>;
  update(id: string, dto: any): Promise<TEntity>;
}
