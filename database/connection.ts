import { DataSource } from "typeorm";
import { Student } from "../entity/entity";
import dotenv from "dotenv";
dotenv.config();

class Database {
  public getConnection = async (): Promise<DataSource> => {
    try {
      const AppDataSource = new DataSource({
        type: "postgres",
        host: process.env.host,
        port: Number(process.env.port),
        username: "postgres",
        password: "Lajin@2002",
        database: "postgres",
        entities: [Student],
        synchronize: false,
        logging: false,
      });
      const connection = await AppDataSource.initialize();
      console.log(`Created Db connection : ${connection.name}`);

      return connection;
    } catch (error) {
      console.error(`Error creating DB connection : ${JSON.stringify(error)}`);
      throw error;
    }
  };
}

export default Database;
