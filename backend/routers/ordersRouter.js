import express from "express";
import catchAsync from "express-async-handler";

import {
    index,
    summary,
    mine,
    store,
    show,
    update,
    deletes,
    deliver
} from "../controllers/ordersController.js";

import {
    isAdmin,
    isAuth,
    isSellerOrAdmin
} from "../utils.js";

const orderRouter = express.Router();

orderRouter.get("/", isAuth, isSellerOrAdmin, catchAsync(index));

orderRouter.get("/summary", isAuth, isAdmin, catchAsync(summary));

orderRouter.get("/mine", isAuth, catchAsync(mine));

orderRouter.post("/", isAuth, catchAsync(store));

orderRouter.get("/:id", isAuth, catchAsync(show));

orderRouter.put("/:id/pay", isAuth, catchAsync(update));

orderRouter.delete("/:id", isAuth, isAdmin, catchAsync(deletes));

orderRouter.put("/:id/deliver", isAuth, isAdmin, catchAsync(deliver));

export default orderRouter;