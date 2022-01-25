const mock = [
  {
    id: 0,
    name: "Lucas Forato",
    email: "lucas7forato@gmail.com",
    password: "12345",
  },
];

export default {
  Query: {
    users: () => mock,
    user: (_: unknown, { id }: { id: number }, __: unknown, ___: unknown) => {
      return mock[id]
    },
  },  
};
