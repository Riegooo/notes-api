import { Router } from "express";
import { updateNote, 
    getNoteId,
    deleteNote} from "../controllers/note.controller";
import { checkId } from "../middleware/auth";

const router = Router();

router.put('/:id', updateNote);
router.post('/getmynote', checkId, getNoteId);
router.delete('/deletenote/:id', checkId, deleteNote);

export default router;