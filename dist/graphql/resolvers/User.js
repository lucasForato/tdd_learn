"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserControllers_1 = require("./../../controllers/UserControllers");
const userController = new UserControllers_1.UserController();
exports.default = {
    Query: {
        users: () => {
            return userController.getUsers();
        },
        user: (_, { id }, __, ___) => {
            return userController.getUser(id);
        },
    },
    Mutation: {
        addUser: async (_, { name, email, password, }, __, ___) => {
            const newUser = await userController.addUser({ name, email, password });
            return newUser;
        },
        deleteUser: async (_, { id }, __, ___) => {
            const deletedUser = await userController.deleteUser(id);
            return deletedUser;
        },
    },
};
//# sourceMappingURL=User.js.map