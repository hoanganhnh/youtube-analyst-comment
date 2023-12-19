import { Router } from "express";

import * as historyController from "../controller/historyController";

const historyRouter = Router();

historyRouter.route("/").get(historyController.getAllHistory);

historyRouter.route("/create").post(historyController.createHistory);

historyRouter
  .route("/find-by-user-id")
  .post(historyController.findHistoryByUserId);

export { historyRouter as historyRoutes };
