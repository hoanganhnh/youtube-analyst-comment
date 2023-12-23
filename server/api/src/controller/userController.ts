import { Request, Response } from "express";

import { userModel } from "../models/User";

export const getAllUser = async (req: Request, res: Response) => {
  const users = await userModel.find().lean();

  return res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const user = await userModel.findOne({ _id: req.params.id });

  return res.status(200).json(user);
};
