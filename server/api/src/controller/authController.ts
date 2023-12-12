import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { Google } from "../lib/google";
import { User, UserDocument } from "../models/User";
import { User as UserType, Role } from "../types";
import { JWT_SECRET_KEY, JWT_EXPIRES_IN } from "../config";

export const sendResponseToken = ({
  user,
  res,
  statusCode,
}: {
  user: UserType | UserDocument;
  statusCode: number;
  res: Response;
}) => {
  const payload = {
    user_id: user._id,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRES_IN,
  });

  // remove password from response
  user.password = undefined;

  res.status(statusCode).json({ data: { user, token }, success: true });
};

export const loginViaGoogle = async (req: Request, res: Response) => {
  const idToken = req.body.idToken;
  if (!idToken)
    return res.status(402).json({ error: { message: "Id token is required" } });
  try {
    const response = await Google.verifyIdToken(idToken);
    if (!response)
      return res.status(500).json({
        error: { message: "Error in logging in. Please try again later" },
      });

    const name = response.name as string;
    const email = response.email as string;
    const googleId = response.sub;
    const imageURL = response.picture;

    let user = await User.findOne({
      googleId,
    });

    // create user if does not exists in db
    if (!user) {
      user = await User.create({
        googleId,
        name,
        imageURL,
        email,
        role: Role.User,
      });
    }

    sendResponseToken({ user, res, statusCode: 200 });
  } catch (error) {
    res.status(500).json({ message: "Error in logging in" });
  }
};

export const getMe = async (req: Request, res: Response) => {
  res.status(200).json({ data: req.user });
};
