"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller");
const router = express_1.default.Router();
//Get all the data in the database
router.get('/', controller_1.getAllData);
//Post data in the database
router.post('/validate-rule', controller_1.addNewData);
exports.default = router;