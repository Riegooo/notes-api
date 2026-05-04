import express, { Request, Response, NextFunction } from 'express';


const title_min = 4;
const title_max = 20;

export function checkTitleLength(req: Request, res: Response, next: NextFunction) {
    try {
        
        const title : String = req.body.title;

        if (title.length < title_min || title.length > title_max) {
            return res.status(400).json({ message: "Title must have a length of 4 to 20 Characters."});
        } else {
            next();
        }

    } catch (err : any) {
        res.status(500).json({ 
            message: err.message 
        });
    }
}