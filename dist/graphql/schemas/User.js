"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = (0, apollo_server_1.gql) `
  type User {
    name: String
    email: String
    password: String
  }

  type Query {
    users: [User]!
    user(id: ID!): User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): addUserResponse!
    deleteUser(id: ID!): deleteUserResponse!
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
//# sourceMappingURL=User.js.map