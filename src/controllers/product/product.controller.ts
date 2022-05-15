import {
  Controller,
  Get,
  Post,
  Request,
} from '@nestjs/common';
import { Product } from 'src/models/product/product.entity';
import { ProductService } from 'src/services/product/product.service';


//teste
// @UseGuards(AuthGuard('jwt'))
@Controller('/product')
export class ProductController {
  constructor(private readonly productService: ProductService ) {}

  @Get()
  async index(): Promise<Product[]> {
    return this.productService.getProduct();
  }

  @Post()
  async store(@Request() request): Promise<Product>{
    return this.productService.storeProduct(request.body);
  }
}