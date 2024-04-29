import { Router } from 'express';
import songsRoute from './songs';
import usersRoute from './users';

const router = Router();

router.use('/songs', songsRoute);
router.use('/users', usersRoute);

export = router;
