import { Entity, Column } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity()
export default class ProductInfo extends AbstractEntity {

  // 商品名称
  @Column('varchar', { length: 64 })
  name: string

  // 单价
  @Column('int')
  price: number

  // 库存
  @Column('int', { nullable: true })
  stock: number

  // 商品状态: 0正常, 1下架
  @Column('int', { nullable: true })
  status: number

  // 描述
  @Column('varchar', { length: 2048, nullable: true })
  description: string

  // 小图
  @Column('varchar', { length: 512, nullable: true })
  icon: string

}
