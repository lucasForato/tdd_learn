import { Sequelize } from "sequelize";

export const makeConnection = () => {
  return new Sequelize("tdd_learn", "postgres", "3140", {
    host: "localhost",
    dialect: "postgres",
  });
};
