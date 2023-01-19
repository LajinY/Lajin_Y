import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Courses } from "./Courses";
// import ManyToMany from "..";

@Entity()
export class Students {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dept: string;

  @OneToOne(() => Courses, (course) => course.student)
  course: Courses;
}
