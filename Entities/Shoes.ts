import {Entity,PrimaryGeneratedColumn,Column,ManyToOne} from "typeorm";
import { User } from "./User";

@Entity()
export class Shoes{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    brand:string

    @Column()
    size:number

    @ManyToOne(()=>User,user=>user.shoes)
    user:User
}