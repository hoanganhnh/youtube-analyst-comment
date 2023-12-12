import { Router } from "express";

import { getMe, loginViaGoogle } from "../controller/authController";
import { protect } from "../middleware/guardAuth";

const authRouter = Router();

authRouter.route("/google").post(loginViaGoogle);

authRouter.use(protect);

authRouter.route("/me").get(getMe);

export { authRouter as authRoutes };
