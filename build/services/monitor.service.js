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
const Monitor_1 = __importDefault(require("../database/models/Monitor"));
const resp_1 = __importDefault(require("../utils/resp"));
class MonitorService {
    constructor() {
        this.model = Monitor_1.default;
    }
    post(monitor) {
        return __awaiter(this, void 0, void 0, function* () {
            const monitorOut = yield this.model.create(monitor);
            if (monitorOut == null) {
                return (0, resp_1.default)(400, "Unable to register monitor");
            }
            return (0, resp_1.default)(201, monitorOut);
        });
    }
}
exports.default = MonitorService;
