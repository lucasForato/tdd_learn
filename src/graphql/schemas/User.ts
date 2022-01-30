import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: ID
    name: String
    email: String
  }

  type Query {
    users: [User]!
    user(email: String!): User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): addUserResponse!
    deleteUser(email: String!): deleteUserResponse!
    loginUser(email: String!, password: String!): loginUserResponse!
  }

  type loginUserResponse {
    code: Int
    success: Boolean
    message: String
    token: String
  }

  type addUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }

  type deleteUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }
`;
