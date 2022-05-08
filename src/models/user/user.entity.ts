import {
  Entity,
  Column
} from 'typeorm';

import BaseEntity from '../base.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  user_name: string;

  @Column()
  email: string;

  @Column({ default: true })
  is_active: boolean;
}