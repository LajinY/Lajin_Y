import {PrimaryGeneratedColumn,Column,Entity} from "typeorm"

@Entity()
export class Movie{
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column({nullable:false})
    title:string

    @Column({nullable:false})
    language:string
}