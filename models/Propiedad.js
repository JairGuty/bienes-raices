import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Propiedad = db.define('propiedades', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNul: false,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNul: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNul: false
    },
    habitaciones: {
        type: DataTypes.INTEGER,
        allowNul: false,
    },
    parqueadero: {
        type: DataTypes.INTEGER,
        allowNul: false,
    },
    wc: {
        type: DataTypes.INTEGER,
        allowNul: false,
    },
    calle: {
        type: DataTypes.STRING(60),
        allowNul: false
    },
    lat: {
        type: DataTypes.STRING,
        allowNul: false
    },
    lng: {
        type: DataTypes.STRING,
        allowNul: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNul: false
    },
    publicado: {
        type: DataTypes.BOOLEAN,
        allowNul: false,
        defaultValue: false
    },
});

export default Propiedad;
