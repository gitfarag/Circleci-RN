import { Router } from "express";
import ordersRouter from "./order.router";

const router = Router();

router.use("/todos", ordersRouter);

export default router;
