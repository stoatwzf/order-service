import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductInfoStatesEnum } from '../common/config/enum.config';
import ProductInfo from '../common/entities/ProductInfo';
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
    return await this.productInfoRepository.save(dto.assignTo(new ProductInfo()))
  }

  async update(id: number, dto: ProductUpdateDto) {
    let productInfo = await this.productInfoRepository.findOneOrFail(id)
    return await this.productInfoRepository.save(dto.assignTo(productInfo))
  }

  async delete(id: number) {
    let productInfo = await this.productInfoRepository.findOneOrFail(id)
    productInfo.status = ProductInfoStatesEnum.deleted
    return await this.productInfoRepository.save(productInfo)
  }

}
