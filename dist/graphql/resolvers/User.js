"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserControllers_1 = require("./../../controllers/UserControllers");
const mock = [
    {
        id: 0,
        name: "Lucas Forato",
        email: "lucas7forato@gmail.com",
        password: "12345",
    },
];
const userController = new UserControllers_1.UserController();
exports.default = {
    Query: {
        users: () => mock,
        user: (_, { id }, __, ___) => {
            return mock[id];
        },
    },
    Mutation: {
        addUser: (_, { name, email, password, }, __, ___) => {
            userController.addUser({ name, email, password });
        },
    },
};
//# sourceMappingURL=User.js.map