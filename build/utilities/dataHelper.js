"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtainData = void 0;
const fs_1 = __importDefault(require("fs"));
function obtainData() {
    const filePath = "./database/data.json";
    const fileContent = fs_1.default.readFileSync(filePath, {
        encoding: "utf8",
        flag: "r",
    });
    const data = JSON.parse(fileContent);
    return data;
}
exports.obtainData = obtainData;
