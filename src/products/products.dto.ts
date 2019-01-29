import { IsDefined, IsString, IsInt } from 'class-validator';
import { Dto } from '../common/types/dto';

export class ProductCreateDto extends Dto {
  @IsDefined() @IsString() name: string // 商品名称
  @IsDefined() @IsInt() price: number // 单价
  @IsInt() stock: number // 库存
  @IsInt() status: number // 商品状态: 0正常, 1下架
  @IsString() description: string // 描述
  @IsString({ each: true }) labels: string[] // 标签
  @IsString({ each: true }) icons: string[] // 小图
  @IsString() detail: string // 详情页
}

export class ProductUpdateDto extends Dto {
  @IsString() name: string // 商品名称
  @IsInt() price: number // 单价
  @IsInt() stock: number // 库存
  @IsInt() status: number // 商品状态: 0正常, 1下架
  @IsString() description: string // 描述
  @IsString({ each: true }) labels: string[] // 标签
  @IsString({ each: true }) icons: string[] // 小图
  @IsString() detail: string // 详情页
}

export class ProductStockDto extends Dto {
  @IsInt() id: number
  @IsInt() quantity: number
}
