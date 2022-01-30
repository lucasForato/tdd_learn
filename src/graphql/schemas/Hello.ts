import { gql } from "apollo-server-express";

export default gql`
  type Hello {
    message: String!
  }

  type Query {
    getHello: Hello
  }
`;
