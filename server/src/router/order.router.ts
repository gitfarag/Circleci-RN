import { Router } from "express";
import { getAll, createItem, updateItem, deleteItem } from "../controllers/todos.controller";

const ordersRouter = Router();

ordersRouter.get("/", getAll);
ordersRouter.post("/create",createItem);
ordersRouter.put("/update", updateItem);
ordersRouter.delete("/delete", deleteItem);

export default ordersRouter;
