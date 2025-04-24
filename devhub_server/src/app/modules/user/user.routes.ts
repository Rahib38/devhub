import express from "express";
import { userController } from "./user.controller";
const userRouter = express.Router();

userRouter.post("/users", userController.createUser);

userRouter.get("/users", userController.getAllUser);

userRouter.get("/users/:id", userController.getSingleUser);

userRouter.put("/users/:id", userController.updateUser);

userRouter.delete("/users/:id", userController.deleteUser);

export default userRouter