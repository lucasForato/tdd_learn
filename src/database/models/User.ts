import { makeConnection } from "../config/sequelizeConfig";
import { DataTypes, Model, Optional } from "sequelize";

const sequelize = makeConnection()

export interface UserAttributes {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export interface UserCreationAttributes
  extends Optional<UserAttributes, "id"> {}

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

export const User = sequelize.define<UserInstance>(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    paranoid: true,
  }
);
