import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';

import { checkIfUserExists, createUser, createSession, checkIfSessionExists, logout, changepassword } from "../repositories/user.repository";

interface SignupRequestBody {name: string; email: string; password: string;}
interface SigninRequestBody {email: string; password: string;}

async function signupController(req: Request, res: Response){
    const { name, email, password } = req.body as SignupRequestBody;
    const passwordhash = await bcrypt.hash(password, 10);
    await createUser(name, email, passwordhash);
    return res.status(200).json({ message: "Usuário cadastrado com sucesso!" });
}

async function signinController(req: Request, res: Response){
    const { email, password } = req.body as SigninRequestBody;
    const user : any = await checkIfUserExists(email);
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {return res.status(409).json({ message: "Senha incorreta" });}
    const token = uuidv4();
    await createSession(token, user.id);
    res.locals.token = token;
    return res.status(200).json({ message: "Login realizado com sucesso!" });
}

async function forgotpasswordController(req: Request, res: Response){
    const { email } = req.body as SigninRequestBody;
    const user : any = await checkIfUserExists(email);
    const token = uuidv4();
    await createSession(token, user.id);
    res.locals.token = token;
    return res.status(200).json({ message: "Token enviado para o e-mail" });
}

async function changepasswordController(req: Request, res: Response){
    const { password } = req.body as { password: string; };
    const token = res.locals.token;
    const session : any = await checkIfSessionExists(token);
    await changepassword(password, session.user_id);
    return res.status(200).json({ message: "Senha alterada com sucesso!" });
}

async function logoutController(req: Request, res: Response){
    const token = res.locals.token;
    await logout(token);
    return res.status(200).json({ message: "Logout realizado com sucesso!" });
}

export { signupController, signinController, forgotpasswordController, changepasswordController, logoutController };