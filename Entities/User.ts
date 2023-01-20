import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from "typeorm";
import { EnumType } from "typescript";
import { Shoes } from "./Shoes";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gender: String;

  @OneToMany(() => Shoes, (shoes) => shoes.user)
  shoes: Shoes[];
}
