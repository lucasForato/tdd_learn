import { createApolloServer } from "./server";

const server = createApolloServer();

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

