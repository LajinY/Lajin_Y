import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./GraphQl/one2many/typeDefs";
import resolvers from "./GraphQl/one2many/resolvers";
import { AppDataSource } from "./Datasource/Connection";

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
  });
  console.log(`server running on ${url}`);
  AppDataSource.initialize()
    .then(() => console.log(`db created ${AppDataSource.name}`))
    .catch((err) => {
      console.log(err);
    });
};

export default startServer();
