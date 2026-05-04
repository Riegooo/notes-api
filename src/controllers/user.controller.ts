import { Request, response, Response } from "express";
import * as userSerivice from "../services/user.service";

export const serverMessage = (req: Request, res: Response) => {
    res.send("HELLO THIS IS A NOTE API!");
}



export const createNoteMessage = (req: Request, res: Response) => {
    res.send("Create an note?");
}



export const createNote = async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;

        const createUserNote = await userSerivice.createUserNote(title, content);
        res.status(200).json({message: "Create Note Sucessfully", success: true, data: createUserNote});

    } catch (err : any) {
        res.status(500).json({
            message: err.message
        })
    }
}


export const selectAllNotes = async (req: Request, res: Response) => {
    try {

        const UserAllNotes = await userSerivice.selectAllUserNotes();
        res.status(200).json({ message: "Selected All!", sucess: true, data: UserAllNotes});

    } catch (err : any) {
        res.status(400).json({ 
            message: err.message 
        })
    }
}