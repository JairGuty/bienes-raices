import { Router } from "express";
import {
    autenticar,
    cerrarSesion,
    comprobarToken,
    confirmar,
    formularioLogin,
    formularioOlvidePassword,
    formularioRegistro,
    nuevoPassword,
    registrar,
    resetPassword
} from "../controllers/usuarioController.js";

const router = Router();

router.get('/login', formularioLogin);
router.post('/login', autenticar);

// Cerrar Sesión
router.post('/cerrar-sesion', cerrarSesion);

router.get('/registro', formularioRegistro);
router.post('/registro', registrar);

router.get('/confirmar/:token', confirmar);

router.get('/olvide-password', formularioOlvidePassword);
router.post('/olvide-password', resetPassword);

// Almacena el nuevo password

router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', nuevoPassword);


export default router;