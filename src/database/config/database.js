require("dotenv").config(); // this is important!
module.exports = {
  development: {
    username: process.env.DEV_DATABASE,
    password: process.env.DEV_DATABASE_PASSWORD,
    database: process.env.DEV_DATABASE_NAME,
    host: process.env.DEV_DATABASE_HOST,
    dialect: "postgres",
  },
};
