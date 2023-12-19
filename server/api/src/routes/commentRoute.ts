import { Router } from "express";

import * as commentController from "../controller/commentController";

const commentRouter = Router();

commentRouter.route("/all").post(commentController.findAllComment);

export { commentRouter as commentRoutes };
