"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeConnection = void 0;
const sequelize_1 = require("sequelize");
const makeConnection = () => {
    return new sequelize_1.Sequelize("tdd_learn", "postgres", "3140", {
        host: "localhost",
        dialect: "postgres",
    });
};
exports.makeConnection = makeConnection;
//# sourceMappingURL=sequelizeConfig.js.map