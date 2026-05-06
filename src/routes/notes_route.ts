import { Router } from "express";
import { updateNote } from "../controllers/note.controller";

const router = Router();

router.put('/:id', updateNote);

export default router;