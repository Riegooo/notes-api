import { Router } from 'express';
import { 
    checkTitleLength

} from '../middleware/auth';

import { createNote } from '../controllers/user.controller';

const router = Router();


router.post('/', checkTitleLength, createNote);

export default router;