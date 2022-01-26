"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_1 = require("./../database/models/User");
class UserController {
    async addUser({ name, email, password, }) {
        try {
            await User_1.User.create({
                name,
                email,
                password,
            });
            return {
                code: 200,
                success: true,
                message: "Successfully added a new user to database",
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
}
exports.UserController = UserController;
//# sourceMappingURL=UserControllers.js.map