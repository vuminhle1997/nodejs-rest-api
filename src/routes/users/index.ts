import { Router } from 'express';
import { createUser, getUsers } from '../../controller/user.controller';

const router = Router();

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', getUsers);

router.post('/', createUser);

export = router;
