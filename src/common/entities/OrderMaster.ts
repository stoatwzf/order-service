import {Entity, Column, OneToMany} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { OrderStatusEnum } from '../config/enumDef'
import OrderDetail from './OrderDetail'

@Entity()
export default class OrderMaster extends AbstractEntity {

  // 买家名字
  @Column('varchar', { length: 32 })
  buyerName: string

  // 买家手机号
  @Column('varchar', { length: 32 })
  buyerPhone: string

  // 买家地址
  @Column('int')
  buyerAddress: string

  // 微信Openid
  @Column('varchar')
  buyerOpenid: string

  // 订单总金额
  @Column('int') // 分
  orderAmount: number

  // 订单状态
  @Column('int', { default: OrderStatusEnum.newly })
  orderStatus: number

  @OneToMany(type => OrderDetail, detail => detail.orderMaster)
  details: OrderDetail[]

}
