import { ApolloServer, gql } from "apollo-server";
import typeDefs from "./graphql/schemas";
import resolvers from "./graphql/resolvers";
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tdd_learn", "postgres", "3140", {
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
  })
  
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const startApolloServer = () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

startApolloServer();
