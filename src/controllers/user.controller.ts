import { Request, response, Response } from "express";
import * as userSerivice from "../services/user.service";

export const getUsers = (req: Request, res: Response) => {
    res.json({ message: "Hello world", success: true});
}

export const getId = (req: Request, res: Response) => {
    res.send('ID');
}

export const getLogginAccount = (req: Request, res: Response) => {
    res.json({message: "Hello Wold", sucess: true});
}

export const registerUser = async (req: Request, res: Response) => {
    try {
        
        const { username, password } = req.body;

        const user = await userSerivice.createUser(username, password);
        res.status(200).json({message: "successfully", success: true, data: user});

    } catch (err: any) {
        res.status(500).json({
            message: err.message
        })
    }
}

export const loginAccount = async (req: Request, res: Response) => {
    try {
        
        const { username, password } = req.body;

        const user = await userSerivice.loginUser(username, password);
        res.status(200).json({ message: "login successsfully", sucess: true, data: user});

    } catch (err: any) {
        res.status(500).json({
            message: err.message
        })
    }
}


