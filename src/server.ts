import { ApolloServer } from "apollo-server";
import typeDefs from "./graphql/schemas";
import resolvers from "./graphql/resolvers";


export const createApolloServer = () => {
  return new ApolloServer({ typeDefs, resolvers });
};

createApolloServer();
