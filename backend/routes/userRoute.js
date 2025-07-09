import express from "express";
import { loginrUser, registerUser } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginrUser);

export default userRouter;
