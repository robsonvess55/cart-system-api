import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import BaseEntity from '../base.entity';

import { Product } from '../product/product.entity';
import { User } from '../user/user.entity';
import { Cart } from './cart.entity';

@Entity()
export class CartOrder extends BaseEntity {
  @Column("decimal")
  total: number;

  @OneToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product: Product;

  @ManyToOne(() => Cart)
  @JoinColumn({ name: "cart_id" })
  cart: Cart;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  
  user: User;
}