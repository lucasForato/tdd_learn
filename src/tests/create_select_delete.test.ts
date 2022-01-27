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

test("return a single user based on ID", async () => {
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
    variables: { userId: 1 },
  });
  expect(response?.data?.user).toEqual({
    name: "Donald Duck",
    email: "donald.duck@gmail.com",
    password: "IamAduck",
  });
});

test("Delete a user", async () => {
  const DELETE_USER = `
  mutation Mutation($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId) {
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
    query: DELETE_USER,
    variables: {
      deleteUserId: 1,
    },
  });
  expect(response?.data?.addUser).toMatchObject({
    code: 200,
    success: true,
    message: "Successfully deleted user from database",
    user: {
      name: "Donald Duck",
      email: "donald.duck@gmail.com",
      password: "IamAduck",
    },
  });
});
