import { Router } from 'express';
import { propiedades } from '../controllers/apiControllers.js';

const router = Router();

router.get('/propiedades', propiedades)



export default router;
