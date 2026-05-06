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
