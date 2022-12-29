import { Request, RequestHandler, Response } from "express";
import TodoModel from "../entities/todoModel";
const _todo = new TodoModel()

// get todos handler
const getAll = (async (req:Request, res:Response):Promise<void>=>{
    try {
        const data = await _todo.index()
        res.json(data).status(200)
    } catch (error) {
        console.log(error)
    }
}) as RequestHandler

// create todos handler
const createItem = (async (req:Request, res:Response):Promise<void>=>{
    try {
        const todo = req.body
        const data = await _todo.createToDo(todo)
        res.json(data).status(200)
    } catch (error) {
        console.log(error)
    }
}) as RequestHandler

// update todos handler
const updateItem = (async (req:Request, res:Response):Promise<void>=>{
    try {
        const todo = req.body
        const data = await _todo.updateTodo(todo)
        res.json(data).status(200)
    } catch (error) {
        console.log(error)
    }
}) as RequestHandler

// delete todos handler 
const deleteItem = (async (req:Request, res:Response):Promise<void>=>{
    try {
        const todo = req.body 
        const data = await _todo.deleteTodo(todo)
        res.json(data).status(200)
    } catch (error) {
        console.log(error)
    }
}) as RequestHandler
export {getAll,
        createItem,
        updateItem,
        deleteItem}