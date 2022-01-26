"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserControllers_1 = require("./../controllers/UserControllers");
const userController = new UserControllers_1.UserController();
test("add a test user", async () => {
    const newUser = await userController.addUser({
        name: "Lucas Forato",
        email: "lucas7forato@gmail.com",
        password: "12345"
    });
    expect(newUser).toMatchObject({
        code: 200,
        success: true,
        message: "Successfully added a new user to database",
        user: {
            name: "Lucas Forato",
            email: "lucas7forato@gmail.com",
            password: "12345",
        },
    });
});
//# sourceMappingURL=userControllers.test.js.map