import { Router } from "express";

import * as videoController from "../controller/videoController";

const videoRouter = Router();

videoRouter.route("/create").post(videoController.createVideo);
videoRouter
  .route("/find-info-by-video-id")
  .post(videoController.findInformationVideoByVideoId);

export { videoRouter as videoRoutes };
