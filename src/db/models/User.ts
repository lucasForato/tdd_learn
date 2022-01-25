import { Model, DataTypes, Optional } from "sequelize";
import connection from "../config/connection";

const sequelize = connection;

interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface UserCreationAttributes extends Optional<IUser, "id"> {}

interface UserInstance extends Model<IUser, UserCreationAttributes>, IUser {}

export const UserModel = sequelize.define<UserInstance>("User", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});

