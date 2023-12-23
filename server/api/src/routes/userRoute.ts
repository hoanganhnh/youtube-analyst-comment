import { Router } from "express";

import * as userController from "../controller/userController";

const userRouter = Router();

userRouter.route("/all").get(userController.getAllUser);
userRouter.route("/:id").get(userController.getUserById);

export { userRouter as userRoutes };
