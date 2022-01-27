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

  async getUsers() {
    const users = await User.findAll();

    return users;
  }

  async getUser(id: number) {
    const user = await User.findAll({
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

  async deleteUser(id: number) {
    try {
      //check if user exists
      const user = await User.findAll({
        where: {
          id: id,
        },
      });

      console.log(user[0])

      if (user[0]) {
        await User.destroy({
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
    } catch (err) {
      return {
        code: 400,
        success: false,
        message: "Couldn't delete user from database",
      };
    }
  }
}
