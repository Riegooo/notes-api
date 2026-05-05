import { Router } from 'express';
import { 
    checkTitleLength,
    checkId

} from '../middleware/auth';

import { createNote, getNoteId } from '../controllers/user.controller';

const router = Router();


router.post('/', checkTitleLength, createNote);
router.post('/getmynote', checkId, getNoteId);

export default router;