import { BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";

export abstract class AbstractEntity extends BaseEntity {

  @PrimaryGeneratedColumn('increment')
  id!: number

  @Column({ default: false })
  deleted!: boolean

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn()
  updated_at!: Date

  @VersionColumn()
  _v!: number
}
