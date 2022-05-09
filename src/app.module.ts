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
import { ProductController } from './controllers/product/product.controller';
import { ProductService } from './services/product/product.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    CartModule,
    ProductModule,
    CartOrderModule,
  ],

  controllers: [
    AppController, 
    UserController, 
    ProductController,
  ],
  
  providers: [
    AppService, 
    UserService, 
    ProductService,
  ],
})

export class AppModule { constructor(private connection: Connection) {} }
