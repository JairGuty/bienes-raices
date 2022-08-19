import { Router } from 'express';
import { buscador, categoria, inicio, noEncontrado } from '../controllers/appControllers.js';


const router = Router();


// Pagina de Inicio
router.get('/', inicio)

// Categorias
router.get('/categorias/:id', categoria)


// Pagina 404
router.get('/404', noEncontrado)

// Buscdor
router.post('/buscador', buscador)


export default router;