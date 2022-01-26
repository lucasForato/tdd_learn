import { User } from "./../database/models/User";

export class UserController {
  async addUser({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    //TODO THE ERROR IS PROBABLY HERE, CHECK IT
    try {
      const newUser = await User.create({
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
    } catch (err) {
      return {
        code: 400,
        success: false,
        message: "Something went wrong, try again",
      };
    }
  }
}
