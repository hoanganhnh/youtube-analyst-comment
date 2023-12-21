import { Router } from "express";

import * as userController from "../controller/userController";

const userRouter = Router();

userRouter.route("/all").get(userController.getAllHistory);

export { userRouter as userRoutes };
