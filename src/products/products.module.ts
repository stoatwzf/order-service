import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import ProductInfo from 'src/common/entities/ProductInfo';

@Module({
  imports: [TypeOrmModule.forFeature([ProductInfo])],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
