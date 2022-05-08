import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartOrder } from './cartOrder.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartOrder])],
  exports: [TypeOrmModule]
})

export class CartOrderModule {}