import TodoModel,{Todo} from "../entities/todoModel";
const _todo = new TodoModel()
const todo:Todo={
    id:1,
    title:"todo 1",
    disc:"loreem 100"
  }

describe("TODO SHOULD RUN CORRECTLY", () => {

  // create todo
  it(`It should add todo`, async () => {
    const item = await _todo.createToDo(todo)
    expect(item.title).toEqual('todo 1');
  });

  // get all todos
  it(`It should get todos`, async () => {
    const item = await _todo.index()
    expect(item[0].title).toEqual('todo 1');
  });

  // update todo
  it(`It should update todo`, async () => {
    todo.title="updated title"
    const item = await _todo.updateTodo({
      id:1,
      title:"updated",
      disc:"updated disc"
    })
    expect(item.title).toEqual("updated");
  });

  // delete todo
    it(`It should delete todo`, async () => {
      const item = await _todo.deleteTodo(todo)
      expect(item).toEqual("deleted");
    });
});
