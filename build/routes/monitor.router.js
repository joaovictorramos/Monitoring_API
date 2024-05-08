"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const monitor_controller_1 = __importDefault(require("../controller/monitor.controller"));
const control = new monitor_controller_1.default();
const monitorRouter = (0, express_1.Router)();
monitorRouter.post("/monitor/create", control.post.bind(control));
exports.default = monitorRouter;
