import {
  Entity,
  Column
} from 'typeorm';

import BaseEntity from '../base.entity';

@Entity()
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column("decimal")
  price: number;

  @Column()
  description: string;

  @Column({ default: true })
  is_active: boolean;
}