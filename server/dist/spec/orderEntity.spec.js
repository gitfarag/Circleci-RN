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
const todoModel_1 = __importDefault(require("../entities/todoModel"));
const _todo = new todoModel_1.default();
const todo = {
    id: 1,
    title: "todo 1",
    disc: "loreem 100"
};
describe("TODO SHOULD RUN CORRECTLY", () => {
    // create todo
    it(`It should add todo`, () => __awaiter(void 0, void 0, void 0, function* () {
        const item = yield _todo.createToDo(todo);
        expect(item.title).toEqual('todo 1');
    }));
    // get all todos
    it(`It should get todos`, () => __awaiter(void 0, void 0, void 0, function* () {
        const item = yield _todo.index();
        expect(item[0].title).toEqual('todo 1');
    }));
    // update todo
    it(`It should update todo`, () => __awaiter(void 0, void 0, void 0, function* () {
        todo.title = "updated title";
        const item = yield _todo.updateTodo({
            id: 1,
            title: "updated",
            disc: "updated disc"
        });
        expect(item.title).toEqual("updated");
    }));
    // delete todo
    it(`It should delete todo`, () => __awaiter(void 0, void 0, void 0, function* () {
        const item = yield _todo.deleteTodo(todo);
        expect(item).toEqual("deleted");
    }));
});
