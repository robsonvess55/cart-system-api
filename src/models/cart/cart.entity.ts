import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';

import BaseEntity from '../base.entity';

@Entity()
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("decimal")
  total: number;

}