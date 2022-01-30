import { Sequelize } from "sequelize";
require("dotenv").config();

export const makeConnection = () => {
  return new Sequelize(
    process.env.DEV_DATABASE_NAME as string,
    process.env.DEV_DATABASE as string,
    process.env.DEV_DATABASE_PASSWORD as string,
    {
      host: process.env.DEV_DATABASE_HOST,
      dialect: "postgres",
    }
  );
};
