// 用户角色
export enum UserRoleEnum {
  buyer = 0,
  seller = 1,
  admin = 99,
}

// 订单状态
export enum OrderStatusEnum {
  newly = 0, // 新建
  paid = 1, // 支付完成
  received = 2, // 商家接受订单
  completed = 3, // 订单完成
  expired = -1, // 过期未支付
}

// 商品状态
export enum ProductInfoStatesEnum {
  normal = 0, // 正常
  lower = 1, // 下架
  trash = -1, // 回收站
  deleted = -2, // 彻底删除
}