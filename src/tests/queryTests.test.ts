import { createApolloServer } from "../server";

const server = createApolloServer();

test("return a list of users", async () => {
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

  expect(response?.data?.users).toEqual([
    {
      name: "Lucas Forato",
      email: "lucas7forato@gmail.com",
      password: "12345",
    },
  ]);
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
    variables: { userId: 0 },
  });
  expect(response?.data?.user).toEqual({
    name: "Lucas Forato",
    email: "lucas7forato@gmail.com",
    password: "12345",
  });
});

