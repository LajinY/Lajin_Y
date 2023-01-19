import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
} from "typeorm";
import { Students } from "./Students";

@Entity()
export class Courses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  course: string;

  @ManyToMany(() => Students, {
    onDelete: "CASCADE",
    eager: true,
  })
  @JoinTable()
  udemy: Students[];
}
