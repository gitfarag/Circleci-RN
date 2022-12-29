import db from "../providers/database.provider";

interface Todo{
    id?:number,
    title? : string,
    disc? : string
}

class TodoModel{
    // show all todos
    async index():Promise<Todo[]>{
        const { rows } = await db.query("SELECT * FROM todos");
         return rows;
    }

    // create a todo item 
    async createToDo(todo:Todo):Promise<Todo>{
        try {
            const {title, disc} = todo
            const sql = "INSERT INTO todos (title,disc) VALUES ($1,$2) RETURNING *"
            const { rows } = await db.query(sql,[title,disc]);
            return rows[0];
        } catch (error:any) {
            return error?.message
        }
    }

    // update todo item
    async updateTodo(todo:Todo):Promise<Todo>{
        try {
            const {id,title,disc} = todo
            const sql =
            "UPDATE todos SET title=$1, disc=$2 WHERE id=$3 RETURNING *";
            const { rows } = await db.query(sql,[title,disc,id]);
            return rows[0];
        } catch (error:any) {
            return error?.message   
        }
    }

    async deleteTodo(todo:Todo):Promise<string>{
        try {
            const id = todo.id
            const sql =
            "DELETE FROM todos WHERE id=$1 RETURNING *";
            await db.query(sql,[id]);
            return "deleted";
        } catch (error:any) {
            return error?.message
        }
    }

}
export {Todo};
export default TodoModel;