import { Router } from 'express';
import { serverMessage, createNoteMessage, selectAllNotes } from '../controllers/user.controller';

const router = Router();

router.get('/', serverMessage);
router.get('/createNotes', createNoteMessage);
router.get('/allnotes', selectAllNotes);

export default router;
