import { Request, Response } from "express";

import { historyModel } from "../models/History";

export const createHistory = async (req: Request, res: Response) => {
  const history = await historyModel.create(req.body);

  return res.status(200).json({ history });
};

export const getAllHistory = async (req: Request, res: Response) => {
  const histories = await historyModel.find();

  return res.status(200).json({ histories });
};
