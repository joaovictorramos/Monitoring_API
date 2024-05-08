"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("sequelize"));
const uuid_1 = require("uuid");
const _1 = __importDefault(require("."));
class Monitor extends sequelize_1.Model {
}
Monitor.init({
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_2.default.UUIDV4
    },
    registration: {
        unique: true,
        allowNull: false,
        type: sequelize_2.default.STRING
    },
    name: {
        unique: true,
        allowNull: false,
        type: sequelize_2.default.STRING
    },
    actualPeriod: {
        type: sequelize_2.default.INTEGER
    },
    institutionalEmail: {
        allowNull: false,
        type: sequelize_2.default.STRING
    },
    typeOfMonitoring: {
        type: sequelize_2.default.STRING
    },
    startHour: {
        type: sequelize_2.default.STRING
    },
    endHour: {
        type: sequelize_2.default.STRING
    },
    createdAt: {
        type: sequelize_2.default.DATE
    },
    updatedAt: {
        type: sequelize_2.default.DATE
    }
}, {
    timestamps: true,
    sequelize: _1.default,
    tableName: 'monitor'
});
Monitor.beforeCreate((monitor, _) => {
    monitor.id = (0, uuid_1.v4)();
});
Monitor.beforeUpdate((monitor, _) => {
    monitor.id = (0, uuid_1.v4)();
});
exports.default = Monitor;
