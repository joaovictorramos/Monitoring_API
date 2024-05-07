"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("sequelize"));
const _1 = __importDefault(require("."));
class Curso extends sequelize_1.Model {
}
Curso.init({
    id: {
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_2.default.NUMBER
    },
    name: {
        allowNull: true,
        type: sequelize_2.default.STRING
    },
    period: {
        allowNull: true,
        type: sequelize_2.default.NUMBER
    }
}, {
    timestamps: true,
    sequelize: _1.default,
    tableName: 'curso'
});
exports.default = Curso;
