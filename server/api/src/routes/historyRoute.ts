import { Router } from "express";

import * as historyController from "../controller/historyController";

const historyRouter = Router();

historyRouter.route("/").get(historyController.getAllHistory);

historyRouter.route("/create").post(historyController.createHistory);

export { historyRouter as historyRoutes };
