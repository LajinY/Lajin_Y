import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { resolvers } from "./graphQl/resolvers";
import { typeDefs } from "./graphQl/typeDefs";

async function startServer(): Promise<void> {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
  });

  console.log(` Server listening at: ${url}`);
}

export default startServer();
