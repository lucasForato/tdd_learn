"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelizeConfig_1 = require("../config/sequelizeConfig");
const sequelize_1 = require("sequelize");
const sequelize = (0, sequelizeConfig_1.makeConnection)();
exports.User = sequelize.define("User", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "users",
    paranoid: true,
});
//# sourceMappingURL=User.js.map