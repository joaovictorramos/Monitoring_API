"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instituicaoRouter_1 = __importDefault(require("./instituicaoRouter"));
const router = (0, express_1.Router)();
router.use(instituicaoRouter_1.default);
exports.default = router;
