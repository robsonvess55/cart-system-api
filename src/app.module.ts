import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { UserModule } from './models/user/user.module';
import { CartModule } from './models/cart/cart.module';
import { ProductModule } from './models/product/product.module';
import { CartOrderModule } from './models/cart/cartOrder.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    CartModule,
    ProductModule,
    CartOrderModule,
  ],

  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})

export class AppModule { constructor(private connection: Connection) {} }
