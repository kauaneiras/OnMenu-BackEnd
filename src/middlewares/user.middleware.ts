import { Request, Response, NextFunction } from "express";
import { checkIfUserExists } from "../repositories/user.repository";
import { validateBody } from "../middlewares/schema.validation.middleware";
import { signInSchema, signUpSchema, forgotpasswordSchema, changepasswordSchema } from "../schemas/users.schemas";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import nodemailer from "nodemailer";

interface SignupRequestBody { name: string; email: string; password: string; confirmPassword: string;}
interface SigninRequestBody {email: string; password: string;}

async function signupMiddleware(req: Request, res: Response, next: NextFunction){
    const { name, email, password, confirmPassword } = req.body as SignupRequestBody;
    validateBody(signUpSchema);
    const user = await checkIfUserExists(email);
    if (user) {return res.status(409).json({ message: "Esse email já foi cadastrado" });}
    if (password !== confirmPassword) {return res.status(409).json({ message: "As senhas não são iguais" });}
    next();
};

async function signinMiddleware(req: Request, res: Response, next: NextFunction){
    const { email, password } = req.body as SigninRequestBody;
    validateBody(signInSchema);
    const user : any = await checkIfUserExists(email);
    if (!user) {return res.status(409).json({ message: "Esse email não foi cadastrado" });}
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {return res.status(409).json({ message: "Senha incorreta" });}
    next();
};

async function forgotpasswordMiddleware(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body as { email: string };
    validateBody(forgotpasswordSchema);
    const user = await checkIfUserExists(email);
    if (!user) {return res.status(409).json({ message: "Esse email não foi cadastrado" });}
    const token = uuidv4();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'seu-email@gmail.com', 
            pass: 'sua-senha', 
        },
    });

    const mailOptions = {
        from: 'seu-email@gmail.com', 
        to: email,
        subject: 'Link para alterar a senha',
        text: `Clique no link a seguir para alterar sua senha: http://localhost:3000/changepassword/${token}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Ocorreu um erro ao enviar o email.' });
        } else {
            console.log('Email enviado: ' + info.response);
            res.status(200).json({ message: 'Email enviado com sucesso.' });
        }
    });
}

async function changepasswordMiddleware(req: Request, res: Response, next: NextFunction){
    const { password, confirmPassword } = req.body as { password: string; confirmPassword: string; };
    const token = req.params.token;
    validateBody(changepasswordSchema);
    if (password !== confirmPassword) {return res.status(409).json({ message: "As senhas não são iguais" });}
    
    next();
};

export { signupMiddleware, signinMiddleware, forgotpasswordMiddleware, changepasswordMiddleware };