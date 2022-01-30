const { ApolloServer } = require("apollo-server-express");
import typeDefs from "../graphql/schemas";
import resolvers from "../graphql/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }: any) => ({ req, res }),
});

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

test("Login as a user", async () => {
  //select user based on email
  const LOGIN = `
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      code
      success
      message
    }
  }
  `;
  const response = await server.executeOperation({
    query: LOGIN,
    variables: {
      email: "donald.duck@gmail.com",
      password: "12345678",
    },
  });

  expect(response?.data?.loginUser).toMatchObject({
    code: 200,
    success: true,
    message: "You successfully signed in!"
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


