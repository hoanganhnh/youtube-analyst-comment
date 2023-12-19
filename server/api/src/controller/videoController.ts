import { Request, Response } from "express";

import { videoModel } from "../models/Video";

export const createVideo = async (req: Request, res: Response) => {
  const video = await videoModel.create(req.body);

  return res.status(200).json({ video });
};

export const findInformationVideoByVideoId = async (
  req: Request,
  res: Response
) => {
  const video = await videoModel.findOne({
    video_id: req.body.videoId,
  });

  return res.status(200).json(video);
};
