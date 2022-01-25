"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = (0, apollo_server_1.gql) `
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
//# sourceMappingURL=User.js.map