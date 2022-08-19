import express from "express";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import usuarioRouter from "./routes/usuarioRoutes.js";
import propiedadesRoutes from "./routes/propiedadesRoutes.js";
import appRoutes from "./routes/appRoutes.js";
import apiRoutes from './routes/apiRoutes.js';
import db from './config/db.js';



// Configuracion de los middleware

// Crear la app
const app = express();
app.use(express.json());

// Habilar lectura del dato del formularios
app.use(express.urlencoded({extended: true}));

// Habilitar Cookie Parser
app.use( cookieParser() );

// Habilitar CSRF
app.use( csrf({cookie: true}) );

// Conexion a la base de datos
try {
    await db.authenticate();
    await db.sync()
    console.log('Base de datos conectada exitosamente');
} catch (error) {
    console.log('No se ha conectado a la base de datos', error);
}

// Habilitar pug
app.set('view engine', 'pug')
app.set('views', './views')

// Carpeta Pública
app.use( express.static('public'))

// Routing
app.use('/', appRoutes);
app.use('/auth', usuarioRouter);
app.use('/', propiedadesRoutes);
app.use('/api', apiRoutes)

// Definimos el
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${ port }`)
});


