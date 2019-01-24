import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ProductCreateDto, ProductUpdateDto } from './products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.findAll()
  }

  @Get(':id')
  getProductById(@Param('id', new ParseIntPipe) id: number) {
    return this.productsService.findOne(id)
  }

  @Post()
  createProduct(@Body() dto: ProductCreateDto) {
    return this.productsService.create(dto)
  }

  @Put(':id')
  updateProduct(@Param('id', new ParseIntPipe) id: number, @Body() dto: ProductUpdateDto) {
    return this.productsService.update(id, dto)
  }

  @Delete(':id')
  deleteProduct(@Param('id', new ParseIntPipe) id: number) {
    return this.productsService.delete(id)
  }

}
