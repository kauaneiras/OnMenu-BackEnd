import { Router } from "express";
import { signupMiddleware, signinMiddleware, forgotpasswordMiddleware, changepasswordMiddleware } from "../middlewares/user.middleware";
import { signupController, signinController, forgotpasswordController, changepasswordController, logoutController } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.post("/signup", signupMiddleware , signupController);
userRoutes.post("/signin", signinMiddleware, signinController);
userRoutes.post("/forgotpassword", forgotpasswordMiddleware, forgotpasswordController);
userRoutes.post ("/changepassword:token", changepasswordMiddleware, changepasswordController);
userRoutes.post("/logout", logoutController);

export { userRoutes };

