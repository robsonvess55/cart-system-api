import {
  Entity,
  Column
} from 'typeorm';

import BaseEntity from '../base.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  user_name: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: true })
  is_active: boolean;
}