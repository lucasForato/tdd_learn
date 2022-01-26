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

  type Mutation {
    addUser(name: String!, email: String!, password: String!): addUserResponse!
  }

  type addUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }
`;
