"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instituicao_controller_1 = __importDefault(require("../controller/instituicao.controller"));
const control = new instituicao_controller_1.default();
const instituicaoRouter = (0, express_1.Router)();
instituicaoRouter.get('/instituicao', control.get.bind(control));
exports.default = instituicaoRouter;
