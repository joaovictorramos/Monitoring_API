"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const monitor_service_1 = __importDefault(require("../services/monitor.service"));
class MonitorController {
    constructor() {
        this.service = new monitor_service_1.default();
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const monitor = req.body;
            try {
                const { status, message } = yield this.service.create(monitor);
                res.status(status).json(message);
            }
            catch (error) {
                next(error);
            }
        });
    }
    findByRegistration(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const registration = (_a = req.query.registration) === null || _a === void 0 ? void 0 : _a.toString();
            try {
                const { status, message } = yield this.service.findByRegistration(registration);
                res.status(status).json(message);
            }
            catch (error) {
                next(error);
            }
        });
    }
    findByName(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const name = (_a = req.query.name) === null || _a === void 0 ? void 0 : _a.toString();
            console.log("name");
            try {
                const { status, message } = yield this.service.findByName(name);
                res.status(status).json(message);
            }
            catch (error) {
                next(error);
            }
        });
    }
    findAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { status, message } = yield this.service.findAll();
                res.status(status).json(message);
            }
            catch (error) {
                next(error);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const monitor = req.body;
            const registration = (_a = req.query.registration) === null || _a === void 0 ? void 0 : _a.toString();
            try {
                const { status, message } = yield this.service.update(monitor, registration);
                res.status(status).json(message);
            }
            catch (error) {
                next(error);
            }
        });
    }
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const registration = (_a = req.query.registration) === null || _a === void 0 ? void 0 : _a.toString();
            try {
                const { status, message } = yield this.service.delete(registration);
                res.status(status).json(message);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = MonitorController;
