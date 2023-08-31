import Joi from "joi";

type SignInParams = { email: string; password: string; };
type SignUpParams = { name: string; email: string; password: string; confirmPassword: string; };
type ForgotpasswordParams = { email: string; };
type ChangepasswordParams = { password: string; confirmPassword: string; };

const signInSchema = Joi.object<SignInParams>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const signUpSchema = Joi.object<SignUpParams>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
});

const forgotpasswordSchema = Joi.object<ForgotpasswordParams>({
    email: Joi.string().email().required(),
});

const changepasswordSchema = Joi.object<ChangepasswordParams>({
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
});

export { signInSchema, signUpSchema, forgotpasswordSchema, changepasswordSchema };