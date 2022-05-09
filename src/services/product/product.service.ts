import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/models/product/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) { }

  async getProduct(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async storeProduct(product: Product): Promise<Product> {
    return await this.productRepository.save(product);
  }
}
