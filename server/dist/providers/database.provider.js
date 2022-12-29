"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const APP_ENV = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : "dev";
const database = (_b = process.env[APP_ENV === "test" ? "POSTGRES_TEST_DB" : "POSTGRES_DB"]) !== null && _b !== void 0 ? _b : "postgres";
exports.db = new pg_1.Pool({
    host: (_c = process.env.POSTGRES_HOST) !== null && _c !== void 0 ? _c : "localhost",
    port: (_d = Number(process.env.POSTGRES_PORT)) !== null && _d !== void 0 ? _d : 5432,
    user: (_e = process.env.POSTGRES_USER) !== null && _e !== void 0 ? _e : "postgres",
    password: (_f = process.env.POSTGRES_PASSWORD) !== null && _f !== void 0 ? _f : "postgres",
    database,
});
exports.default = exports.db;
