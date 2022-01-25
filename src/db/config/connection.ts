import { Sequelize } from "sequelize";

export default new Sequelize('tdd_learn', 'postgres', '3140', {
  host: 'localhost',
  dialect: 'postgres'
})