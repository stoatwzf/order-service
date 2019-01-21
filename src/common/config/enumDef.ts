// 用户角色
export enum UserRole {
  buyer = 0,
  seller = 1,
  admin = 99,
}

// 订单状态
export enum OrderStatus {
  expired = -1,
  newly = 0,
  paid = 1,
  received = 2,
  completed = 3
}