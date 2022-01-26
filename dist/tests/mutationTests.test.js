"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../server");
const server = (0, server_1.createApolloServer)();
test("Create a new User", async () => {
    var _a;
    const CREATE_USER = `
  mutation Mutation($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      code
      success
      message
    }
  }
  `;
    const response = await server.executeOperation({
        query: CREATE_USER,
        variables: {
            name: "Donald Duck",
            email: "donald.duck@gmail.com",
            password: "IamAduck",
        },
    });
    expect((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.addUser).toMatchObject({
        code: 200,
        success: true,
        message: "Successfully added a new user to database",
    });
});
//# sourceMappingURL=mutationTests.test.js.map