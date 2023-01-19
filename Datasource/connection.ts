import {DataSource}  from "typeorm"
import { Courses } from "../Entity/Courses";
import { Students } from "../Entity/Students";

const AppDataSource=new DataSource({
    
    type:"postgres",
    host:"localhost",
    username:"postgres",
    password:"Lajin@2002",
    database:"postgres",
    port:5432,
    entities:[Students,Courses],
    synchronize:true,
    logging:true

})

export default AppDataSource;