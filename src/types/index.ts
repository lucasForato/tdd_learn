import { Model } from "sequelize";

//USER
export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UserSequelize extends Model<IUser>, IUser {}
