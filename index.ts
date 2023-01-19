import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./GraphQl/typeDefs";
import { resolvers } from "./GraphQl/resolvers";
import AppDataSource from "./Datasource/connection";

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 3030 },
  });
  console.log(`sevrer Connected at :${url}`);
  AppDataSource.initialize()
    .then(() => {
      console.log(`DB connected:${AppDataSource.name}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default startServer();
