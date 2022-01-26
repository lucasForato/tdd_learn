import { UserController } from "./../../controllers/UserControllers";

const mock = [
  {
    id: 0,
    name: "Lucas Forato",
    email: "lucas7forato@gmail.com",
    password: "12345",
  },
];

const userController = new UserController();

export default {
  Query: {
    users: () => mock,
    user: (_: unknown, { id }: { id: number }, __: unknown, ___: unknown) => {
      return mock[id];
    },
  },
  Mutation: {
    addUser: async (
      _: unknown,
      {
        name,
        email,
        password,
      }: { name: string; email: string; password: string },
      __: unknown,
      ___: unknown
    ) => {
      const newUser = await userController.addUser({ name, email, password });

      return newUser;
    },
  },
};
