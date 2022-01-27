"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_1 = require("./../database/models/User");
class UserController {
    async addUser({ name, email, password, }) {
        try {
            const newUser = await User_1.User.create({
                name,
                email,
                password,
            });
            const userObject = {
                name: newUser.toJSON().name,
                email: newUser.toJSON().email,
                password: newUser.toJSON().password,
            };
            return {
                code: 200,
                success: true,
                message: "Successfully added a new user to database",
                user: userObject,
            };
        }
        catch (err) {
            return {
                code: 400,
                success: false,
                message: "Something went wrong, try again",
            };
        }
    }
    async getUsers() {
        const users = await User_1.User.findAll();
        return users;
    }
    async getUser(id) {
        const user = await User_1.User.findAll({
            where: {
                id: id,
            },
        });
        return {
            name: user[0].name,
            email: user[0].email,
            password: user[0].password,
        };
    }
    async deleteUser(id) {
        try {
            const user = await User_1.User.findAll({
                where: {
                    id: id,
                },
            });
            console.log(user[0]);
            if (user[0]) {
                await User_1.User.destroy({
                    where: {
                        id: id,
                    },
                });
                return {
                    code: 200,
                    success: true,
                    message: "Successfully deleted user from database",
                    user: {
                        name: user[0].name,
                        email: user[0].email,
                        password: user[0].password,
                    },
                };
            }
            return {
                code: 400,
                success: false,
                message: "Couldn't delete user from database",
            };
        }
        catch (err) {
            return {
                code: 400,
                success: false,
                message: "Couldn't delete user from database",
            };
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserControllers.js.map