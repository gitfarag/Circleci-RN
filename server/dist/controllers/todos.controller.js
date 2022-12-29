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
exports.deleteItem = exports.updateItem = exports.createItem = exports.getAll = void 0;
const todoModel_1 = __importDefault(require("../entities/todoModel"));
const _todo = new todoModel_1.default();
// get todos handler
const getAll = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield _todo.index();
        res.json(data).status(200);
    }
    catch (error) {
        console.log(error);
    }
}));
exports.getAll = getAll;
// create todos handler
const createItem = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = req.body;
        const data = yield _todo.createToDo(todo);
        res.json(data).status(200);
    }
    catch (error) {
        console.log(error);
    }
}));
exports.createItem = createItem;
// update todos handler
const updateItem = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = req.body;
        const data = yield _todo.updateTodo(todo);
        res.json(data).status(200);
    }
    catch (error) {
        console.log(error);
    }
}));
exports.updateItem = updateItem;
// delete todos handler 
const deleteItem = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = req.body;
        const data = yield _todo.deleteTodo(todo);
        res.json(data).status(200);
    }
    catch (error) {
        console.log(error);
    }
}));
exports.deleteItem = deleteItem;
