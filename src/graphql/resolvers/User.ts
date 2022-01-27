import { UserController } from "./../../controllers/UserControllers";

const userController = new UserController();

export default {
  Query: {
    //TODO: return all users, not mock
    users: () => {
      return userController.getUsers();
    },
    //TODO: return a real user, not a mock
    user: (_: unknown, { id }: { id: number }, __: unknown, ___: unknown) => {
      return userController.getUser(id);
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

    deleteUser: async (
      _: unknown,
      { id }: { id: number },
      __: unknown,
      ___: unknown
    ) => {
      const deletedUser = await userController.deleteUser(id);

      return deletedUser;
    },
  },
};
