import { UserController } from "./../../controllers/UserControllers";
const userController = new UserController();

export default {
  Query: {
    users: () => {
      return userController.getUsers();
    },
    user: (_: undefined, { email }: { email: string }) => {
      return userController.getUser(email);
    },
  },
  Mutation: {
    addUser: async (
      _: undefined,
      {
        name,
        email,
        password,
      }: { name: string; email: string; password: string }
    ) => {
      const newUser = await userController.addUser({ name, email, password });

      return newUser;
    },

    deleteUser: async (_: undefined, { email }: { email: string }) => {
      const deletedUser = await userController.deleteUser(email);

      return deletedUser;
    },

    loginUser: async (_: undefined, {email, password}: {email: string, password: string}) => {
      return userController.loginUser(email, password)
    }
  },
};
