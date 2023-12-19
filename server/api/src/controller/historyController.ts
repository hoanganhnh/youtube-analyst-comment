import { Request, Response } from "express";

import { historyModel } from "../models/History";
import { videoModel } from "../models/Video";

export const createHistory = async (req: Request, res: Response) => {
  const history = await historyModel.create(req.body);

  return res.status(200).json({ history });
};

export const getAllHistory = async (req: Request, res: Response) => {
  const histories = await historyModel.find();

  return res.status(200).json({ histories });
};

export const findHistoryByUserId = async (req: Request, res: Response) => {
  const histories = await historyModel
    .find({
      userId: req.body.userId,
    })
    .lean();

  const historiesRes = await Promise.all(
    histories.map(async (history) => {
      const video = await videoModel
        .findOne({ video_id: history.video_id })
        .lean();
      return { ...history, ...video };
    })
  );

  return res.status(200).json(historiesRes);
};
