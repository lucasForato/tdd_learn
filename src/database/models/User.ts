import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("tdd_learn", "postgres", '3140', {
  host: "localhost",
  dialect: "postgres",
});

class User extends Model {
  public readonly id!: number;
  public readonly name!: string;
  public readonly email: string;
  public readonly password: string;
}

User.init(
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
    sequelize
  }
);
