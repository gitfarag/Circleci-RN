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
const database_provider_1 = __importDefault(require("../providers/database.provider"));
class TodoModel {
    // show all todos
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const { rows } = yield database_provider_1.default.query("SELECT * FROM todos");
            return rows;
        });
    }
    // create a todo item 
    createToDo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, disc } = todo;
                const sql = "INSERT INTO todos (title,disc) VALUES ($1,$2) RETURNING *";
                const { rows } = yield database_provider_1.default.query(sql, [title, disc]);
                return rows[0];
            }
            catch (error) {
                return error === null || error === void 0 ? void 0 : error.message;
            }
        });
    }
    // update todo item
    updateTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, title, disc } = todo;
                const sql = "UPDATE todos SET title=$1, disc=$2 WHERE id=$3 RETURNING *";
                const { rows } = yield database_provider_1.default.query(sql, [title, disc, id]);
                return rows[0];
            }
            catch (error) {
                return error === null || error === void 0 ? void 0 : error.message;
            }
        });
    }
    deleteTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = todo.id;
                const sql = "DELETE FROM todos WHERE id=$1 RETURNING *";
                yield database_provider_1.default.query(sql, [id]);
                return "deleted";
            }
            catch (error) {
                return error === null || error === void 0 ? void 0 : error.message;
            }
        });
    }
}
exports.default = TodoModel;
