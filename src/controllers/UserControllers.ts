import { userValidationSchema } from "./../helpers/validator";
import { IAddUser, IReturnUser, IUser } from "./../types/userControllerTypes";
import { User } from "./../database/models/User";
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');


export class UserController {
  async addUser({ name, email, password }: IAddUser): Promise<IReturnUser> {
    //VALIDATION
    const { error } = userValidationSchema.validate({ name, email, password });
    if (error) {
      return {
        code: 400,
        success: false,
        message: error.message,
        user: undefined,
      };
    }

    //CHECK IF USER EXISTS
    const userExists = await User.findAll({
      where: {
        email: email,
      },
    });
    if (userExists[0]) {
      return {
        code: 400,
        success: false,
        message: "this email is already in use",
        user: undefined,
      };
    }

    //HASHING PASSWORD
    const hash = await bcrypt.hashSync(password, saltRounds);

    try {
      const newUser = await User.create({
        name: name,
        email: email,
        password: hash,
      });

      const userObject = {
        name: newUser.toJSON().name,
        email: newUser.toJSON().email,
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
        user: undefined,
      };
    }
  }

  async getUsers() {
    const users = await User.findAll();

    return users;
  }

  async getUser(email: string): Promise<IUser> {
    const user = await User.findAll({
      where: {
        email: email,
      },
    });

    return {
      id: user[0].id,
      name: user[0].name,
      email: user[0].email,
      password: user[0].password,
    };
  }

  async deleteUser(email: string) {
    try {
      //check if user exists
      const user = await this.getUser(email)

      if (user.id) {
        await User.destroy({
          where: {
            email: email,
          },
        });

        return {
          code: 200,
          success: true,
          message: "Successfully deleted user from database",
          user: {
            name: user.name,
            email: user.email
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

  async loginUser(email: string, password: string) {
    try {

      //check if user doesn't exist
      const user = await this.getUser(email);
      if (!user.email) {
        return {
          code: 400,
          success: false,
          message: "email or password is invalid",
          token: undefined,
        };
      }

      //check if password matches
      const matchingPassword = bcrypt.compareSync(password, user.password);
      if(!matchingPassword) {
        return {
          code: 400,
          success: false,
          message: "Email or password is invalid",
          token: undefined,
        };
      }

      //generate a token
      const token = jwt.sign({ userId: user.id}, process.env.TOKEN_SECRET)

      return {
        code: 400,
        success: false,
        message: "message",
        token: token,
      };
    } catch (err) {
      return {
        code: 400,
        success: false,
        message: err.message,
        token: undefined,
      };
    }
  }
}
