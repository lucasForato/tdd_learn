"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../server");
const server = (0, server_1.createApolloServer)();
test("return a list of users", async () => {
    var _a;
    const GET_USERS = `
  query Query {
    users {
      name
      email
      password
    }
  }
  `;
    const response = await server.executeOperation({ query: GET_USERS });
    expect((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.users).toEqual([
        {
            name: "Lucas Forato",
            email: "lucas7forato@gmail.com",
            password: "12345",
        },
    ]);
});
test("return a single user based on ID", async () => {
    var _a;
    const GET_USER = `
  query Query($userId: ID!) {
    user(id: $userId) {
      name,
      email,
      password
    }
  }
  `;
    const response = await server.executeOperation({
        query: GET_USER,
        variables: { userId: 0 },
    });
    expect((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.user).toEqual({
        name: "Lucas Forato",
        email: "lucas7forato@gmail.com",
        password: "12345",
    });
});
//# sourceMappingURL=returnUsers.test.js.map