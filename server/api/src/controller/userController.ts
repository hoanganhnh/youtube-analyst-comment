import { Request, Response } from "express";

import { userModel } from "../models/User";

export const getAllHistory = async (req: Request, res: Response) => {
  const users = await userModel.find().lean();

  return res.status(200).json(users);
};
