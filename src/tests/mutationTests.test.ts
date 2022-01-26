import { createApolloServer } from "../server";

const server = createApolloServer();

test("Create a new User", async () => {
  const CREATE_USER = `
  mutation Mutation($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      code
      success
      message
      user {
        name
        email
        password
      }
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
  expect(response?.data?.addUser).toMatchObject({
    code: 200,
    success: true,
    message: "Successfully added a new user to database",
    user: {
      name: "Donald Duck",
      email: "donald.duck@gmail.com",
      password: "IamAduck",
    },
  });
});
