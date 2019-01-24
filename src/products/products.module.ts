import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import ProductInfo from '../common/entities/ProductInfo';

@Module({
  imports: [TypeOrmModule.forFeature([ProductInfo])],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
