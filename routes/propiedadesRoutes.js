import { Router } from 'express';
import { body } from 'express-validator';
import { admin, agregarImagen, almacenarImagen, cambiarEstado, crearPropiedad, editar,
        eliminar, enviarMensaje, guardar, guardarCambios, mostrarPropiedad, verMensajes } from '../controllers/propiedadesController.js';
import identificarUsuario from '../middleware/identificarUsuario.js';
import protegerRuta from '../middleware/protegerRuta.js';
import upload from '../middleware/subirImagen.js';


const router = Router();

router.get('/mis-propiedades', protegerRuta, admin);
router.get('/propiedades/crear', protegerRuta, crearPropiedad);
router.post('/propiedades/crear',
    protegerRuta,
    body('titulo').notEmpty().withMessage('El Titulo del anuncio es obligatorio'),
    body('descripcion')
        .notEmpty().withMessage('La descripcion del anuncio no puede ir vacía')
        .isLength({ max: 200 }).withMessage('Las descripción es muy larga'),
    body('categoria').isNumeric().withMessage('Seleciona una categoria'),
    body('precio').isNumeric().withMessage('Seleciona un rango de precios'),
    body('habitaciones').isNumeric().withMessage('Seleciona la cantidad de habitaciones'),
    body('parqueadero').isNumeric().withMessage('Seleciona la cantidad de parqueadero'),
    body('wc').isNumeric().withMessage('Seleciona la cantidad de baños'),
    body('lat').notEmpty().withMessage('Ubica la propiedad en el mapa'),
    guardar
);
router.get('/propiedades/agregar-imagen/:id',
    protegerRuta,
    agregarImagen
);

router.post('/propiedades/agregar-imagen/:id',
    protegerRuta,
    upload.single('imagen'),
    almacenarImagen
)

router.get('/propiedades/editar/:id',
    protegerRuta,
    editar
)

router.post('/propiedades/editar/:id',
    protegerRuta,
    body('titulo').notEmpty().withMessage('El Titulo del anuncio es obligatorio'),
    body('descripcion')
        .notEmpty().withMessage('La descripcion del anuncio no puede ir vacía')
        .isLength({ max: 200 }).withMessage('Las descripción es muy larga'),
    body('categoria').isNumeric().withMessage('Seleciona una categoria'),
    body('precio').isNumeric().withMessage('Seleciona un rango de precios'),
    body('habitaciones').isNumeric().withMessage('Seleciona la cantidad de habitaciones'),
    body('parqueadero').isNumeric().withMessage('Seleciona la cantidad de parqueadero'),
    body('wc').isNumeric().withMessage('Seleciona la cantidad de baños'),
    body('lat').notEmpty().withMessage('Ubica la propiedad en el mapa'),
    guardarCambios
);

router.post('/propiedades/eliminar/:id',
    protegerRuta,
    eliminar
);

router.put('/propiedades/:id', 
    protegerRuta,
    cambiarEstado,
)

// Area Publica
router.get('/propiedad/:id',
    identificarUsuario,
    mostrarPropiedad
);

// Almacenar los mensajes
router.post('/propiedad/:id', 
    identificarUsuario,
    body('mensaje').isLength({ min: 20 }).withMessage('Escriba un mensaje, mínimo 20 Caracteres'),
    enviarMensaje
)

// Leer mensajes desde admin
router.get('/mensajes/:id', 
    protegerRuta,
    verMensajes
)


export default router;