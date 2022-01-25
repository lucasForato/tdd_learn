"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = new sequelize_1.Sequelize('tdd_learn', 'postgres', '3140', {
    host: 'localhost',
    dialect: 'postgres'
});
//# sourceMappingURL=connection.js.map