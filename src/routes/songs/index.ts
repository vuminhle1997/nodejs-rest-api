import { Router } from 'express';
import {
  createSong,
  deleteSong,
  editSong,
  getSongs,
} from '../../controller/song.controller';

const router = Router();

router.get('/', getSongs);

router.post('/', createSong);

router.delete('/:id', deleteSong);

router.put('/:id', editSong);

export = router;
