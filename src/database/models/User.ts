import { makeConnection } from './../config/sequelizeConfig';
import { UserSequelize } from "./../../types/index";
import { DataTypes } from "sequelize";

const sequelize = makeConnection();

export const User = sequelize.define<UserSequelize>(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
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
  }
);
