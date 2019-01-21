import {Entity, ManyToOne, OneToOne, JoinColumn, Column} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import OrderMaster from './OrderMaster';
import ProductInfo from './ProductInfo';

@Entity()
export default class OrderDetail extends AbstractEntity {

  // 订单id
  @ManyToOne(type => OrderMaster, order => order.details)
  orderMaster!: OrderMaster

  // 商品id
  @OneToOne(type => ProductInfo)
  @JoinColumn()
  product!: ProductInfo

  // 商品名称
  @Column('varchar', { length: 64 })
  productName!: string

  // 商品单价
  @Column('int')
  productPrice!: number

  // 商品数量
  @Column('int')
  productQuantity!: number
  
  // 商品小图
  @Column('varchar')
  productIcon!: string

}
