import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./GraphQl/resolvers";
import { typeDefs } from "./GraphQl/typeDefs";
import AppDataSource from "./DataSource/Connection";

const startServer = async () => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
  });
  console.log(`server running on ${url}`);

  AppDataSource.initialize()
    .then(() => {
      console.log(`database Created: ${AppDataSource.name}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default startServer();
