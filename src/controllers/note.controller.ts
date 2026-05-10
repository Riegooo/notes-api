import { Request, response, Response } from "express";
import * as userSerivice from "../services/note.service";

export const updateNote = async (req: Request, res: Response) => {
    try {
        
        const id = Number(req.params.id);
        const { title, content } = req.body;

        if (!id) {
            res.status(400).json({
                message: "Invalid ID",
                success: false
            });
        }

        const UpdateUserNote = await userSerivice.updatedNote(title, content, id);


        res.status(200).json({
            message: "Note Updated!",
            success: true,
            data: UpdateUserNote
        });

    } catch (err: any) {
        res.status(500).json({
            message: err.message
        });
    }
}



export const getNoteId = async (req: Request, res: Response) => {
    try {

        const id = req.body.id
        const getNote = await userSerivice.getNote(id);
        res.status(200).json({ message: "Get Note Successfully!", success: true, data: getNote });

    } catch (err : any) {
        if (err.message === "NOT_FOUND") {
            res.status(500).json({
                message: err.message
            });
        }
        res.status(400).json({message: "Server error."});
    }
}



export const deleteNote = async (req: Request, res: Response) => {
    try {
        
        const id = Number(req.params.id);

        if (!id) {
            res.status(500).json({
                mmessage: "INVALID ID",
                success: false
            });
        }

        const deleteNote = await userSerivice.deleteUserNotes(id);

        res.status(200).json({
            message: "Note Deleted Successfully!",
            success: true,
            data: deleteNote
        });


    } catch (err: any) {
        res.status(500).json({
            message: err.message
        })
    }
}