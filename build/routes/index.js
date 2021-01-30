"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const data_json_1 = __importDefault(require("../data.json"));
router.get("/", (req, res, next) => res.json({ data: data_json_1.default }));
exports.default = router;