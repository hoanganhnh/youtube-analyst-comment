import { Request, Response } from "express";

import { commentModel } from "../models/Comment";

export const findAllComment = async (req: Request, res: Response) => {
  const comments = await commentModel
    .find({
      video_id: req.body.videoId,
    })
    .lean();

  const countPOS = comments.filter(
    (comment) => comment.type_comment === "POS"
  ).length;

  return res.status(200).json({
    comments,
    total: comments.length,
    countPOS,
    countNEG: comments.length - countPOS,
  });
};
