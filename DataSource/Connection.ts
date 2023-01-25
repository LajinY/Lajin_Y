import { DataSource } from "typeorm";
import { Movie } from "../Entities/Movie";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Lajin@2002",
  entities: [Movie],
  synchronize: true,
  logging: true,
});
export default AppDataSource;
