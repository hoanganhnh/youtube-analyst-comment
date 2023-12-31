import { Router } from "express";

import * as authController from "../controller/authController";
import { loginValidation, signUpValidation, validate } from "../validation";

const authRouter = Router();

authRouter
  .route("/signup")
  .post(signUpValidation(), validate, authController.signUp);
authRouter
  .route("/login")
  .post(loginValidation(), validate, authController.login);
authRouter.route("/google").post(authController.loginViaGoogle);

authRouter.route("/me").get(authController.getMe);

export { authRouter as authRoutes };
