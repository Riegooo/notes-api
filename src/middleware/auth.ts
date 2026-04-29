import express, { Request, Response, NextFunction } from 'express';

export function checkUserInput(req: Request, res: Response, next: NextFunction) {
    try {
        const username : String = req.body.username;
        const password : String = req.body.password;

        const username_num : number = username.length;
        const password_num : number = password.length;

        if (!username || !password) {
            return res.status(400).json({message: "Please input the fields", success: false});
        } 

        if (username_num < 3 || username_num > 20) {
            return res.status(400).json({message: "Username must have a length of 3 to 20 Characters.", success: false});
        }  else if (password_num < 3) {
            return res.status(400).json({message: "Password must have a length of 8 or more Characters.", success: false});
        } else {
            next();
        }
        

    } catch (error) {
        console.log(error);
    }
}