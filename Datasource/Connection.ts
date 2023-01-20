import {DataSource} from "typeorm";
import { Shoes } from "../Entities/Shoes";
import { User } from "../Entities/User";

export const AppDataSource=new DataSource({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"Lajin@2002",
    database:"postgres",
    entities:[User,Shoes],
    synchronize:true,
    logging:true
})
