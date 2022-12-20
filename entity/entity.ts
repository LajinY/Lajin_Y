import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 100,
  })
  firstName?: string;

  @Column("text")
  lastName?: string;

  @Column("int")
  age!: number;
}
