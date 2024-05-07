"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("sequelize"));
const _1 = __importDefault(require("."));
class Instituicao extends sequelize_1.Model {
}
Instituicao.init({
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_2.default.INTEGER,
    },
    name: {
        allowNull: true,
        type: sequelize_2.default.STRING,
    },
    principal: {
        allowNull: true,
        type: sequelize_2.default.STRING,
    }
}, {
    timestamps: true,
    sequelize: _1.default,
    tableName: 'instituicao'
});
exports.default = Instituicao;
