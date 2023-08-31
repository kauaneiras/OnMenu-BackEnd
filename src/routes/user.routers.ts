import { Router } from "express";
import { validateBody } from "../middlewares/schema.validation.middleware";
import { signInSchema, signUpSchema, forgotpasswordSchema, changepasswordSchema } from "../schemas/users.schemas";

const userRoutes = Router();

userRoutes.post("/signup", validateBody(signUpSchema), controller);
userRoutes.post("/signin", validateBody(signInSchema), controller);
userRoutes.post("/forgotpassword", validateBody(forgotpasswordSchema), controller);
userRoutes.post ("/changepassword:token", validateBody(changepasswordSchema), controller);
userRoutes.post("/profile", validateBody(signUpSchema), controller);
userRoutes.post("/logout", controller);

export { userRoutes };

