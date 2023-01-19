import {PrimaryGeneratedColumn,Column,Entity,ManyToMany} from "typeorm";
import { Courses } from "./Courses";
// import ManyToMany from "..";

@Entity()
export class Students{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    dept:string
    
}