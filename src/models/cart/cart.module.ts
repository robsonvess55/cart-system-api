import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart])],
  exports: [TypeOrmModule]
})

export class CartModule {}