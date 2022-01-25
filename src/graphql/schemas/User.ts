import { gql } from "apollo-server";

export default gql`
  type User {
    name: String
    email: String!
    password: String!
  }

  type Query {
    users: [User]!
    user(id: ID!): User
  }
`;
