"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../server");
test("return a list of users", async () => {
    var _a;
    const server = (0, server_1.createApolloServer)();
    const GET_BOOKS = `
  query Query {
    users {
      name
      email
      password
    }
  }
  `;
    const response = await server.executeOperation({ query: GET_BOOKS });
    expect((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.users).toEqual([
        {
            name: "Lucas Forato",
            email: "lucas7forato@gmail.com",
            password: "12345",
        },
    ]);
});
//# sourceMappingURL=test1.test.js.map