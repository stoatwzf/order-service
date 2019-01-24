import { IsDefined, IsString, IsInt } from 'class-validator';
import { Dto } from '../common/types/dto';

export class ProductCreateDto extends Dto {
  @IsDefined() @IsString() readonly name: string // 商品名称
  @IsDefined() @IsInt() readonly price: number // 单价
  @IsInt() readonly stock: number // 库存
  @IsInt() readonly status: number // 商品状态: 0正常, 1下架
  @IsString() readonly description: string // 描述
  @IsString() readonly icon: string // 小图
}

export class ProductUpdateDto extends Dto {
  @IsString() public readonly name: string // 商品名称
  @IsInt() public readonly price: number // 单价
  @IsInt() public readonly stock: number // 库存
  @IsInt() public readonly status: number // 商品状态: 0正常, 1下架
  @IsString() public readonly description: string // 描述
  @IsString() public readonly icon: string // 小图
}

export class ProductStockDto extends Dto {
  @IsInt() readonly id: number
  @IsInt() readonly quantity: number
}
