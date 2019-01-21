import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ProductInfo from 'src/common/entities/ProductInfo';
import { Repository } from 'typeorm';
import { ProductCreateDto, ProductUpdateDto } from './products.dto';

@Injectable()
export class ProductsService {

  constructor(@InjectRepository(ProductInfo) private readonly productInfoRepository: Repository<ProductInfo>) {}

  async findAll(): Promise<ProductInfo[]> {
    return this.productInfoRepository.find()
  }

  async findOne(id: number): Promise<ProductInfo> {
    return this.productInfoRepository.findOneOrFail(id)
  }

  async create(dto: ProductCreateDto) {
    const productInfo = new ProductInfo()
    Object.assign(productInfo, dto)
    return await this.productInfoRepository.save(productInfo)
  }

  async update(id: number, dto: ProductUpdateDto) {
    let productInfo = await this.productInfoRepository.findOneOrFail(id)
    Object.assign(productInfo, dto)
    return await this.productInfoRepository.save(productInfo)
  }

  async delete(id: number) {
    let productInfo = await this.productInfoRepository.findOneOrFail(id)
    productInfo.deleted = true
    return await this.productInfoRepository.save(productInfo)
  }

}
