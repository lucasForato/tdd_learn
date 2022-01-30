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
      }
    }
  }
  `;
  const response = await server.executeOperation({
    query: CREATE_USER,
    variables: {
      name: "Donald Duck",
      email: "donald.duck@gmail.com",
      password: "12345678",
    },
  });
  expect(response?.data?.addUser).toMatchObject({
    code: 200,
    success: true,
    message: "Successfully added a new user to database",
    user: {
      name: "Donald Duck",
      email: "donald.duck@gmail.com",
    },
  });
});

test("return a single user based on email", async () => {
  const GET_USER = `
  query Query($email: String!) {
    user(email: $email) {
      name
      email
    }
  }
  `;
  const response = await server.executeOperation({
    query: GET_USER,
    variables: { email: "donald.duck@gmail.com" },
  });
  expect(response?.data?.user).toEqual({
    name: "Donald Duck",
    email: "donald.duck@gmail.com",
  });
});

test("Delete a user", async () => {
  //select user based on email
  const DELETE_USER = `
  mutation Mutation($email: String!) {
    deleteUser(email: $email) {
      code
      success
      message
      user {
        name
        email
      }
    }
  }
  `;
  const response = await server.executeOperation({
    query: DELETE_USER,
    variables: {
      email: "donald.duck@gmail.com",
    },
  });

  expect(response?.data?.deleteUser).toMatchObject({
    code: 200,
    success: true,
    message: "Successfully deleted user from database",
    user: {
      name: "Donald Duck",
      email: "donald.duck@gmail.com",
    },
  });
});
