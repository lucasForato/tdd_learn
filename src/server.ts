const { ApolloServer } = require("apollo-server-express");
import typeDefs from "./graphql/schemas";
import resolvers from "./graphql/resolvers";
import express from "express";
import { verify } from "jsonwebtoken";

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }: any) => ({ req, res }),
  });

  await server.start();

  app.use((req, _, next) => {
    const token = req.headers.authorization;
    if (token) {
      const data = verify(
        token as string,
        process.env.TOKEN_SECRET as string
      ) as any;
      (req as any).userId = data.userId;
    }
    next();
  });

  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
  });
  return { server, app };
}

startApolloServer();
