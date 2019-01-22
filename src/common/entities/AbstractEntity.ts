import { BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";
import { Dto } from "../types/dto";

export abstract class AbstractEntity extends BaseEntity {

  constructor(plainProduct?: Dto) {
    super()
    plainProduct && Object.assign(plainProduct)
  }

  @PrimaryGeneratedColumn('increment')
  id: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @VersionColumn()
  _v: number
}
