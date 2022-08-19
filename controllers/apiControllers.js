import { Propiedad, Categoria, Precio} from '../models/index.js'

const propiedades = async(req, res) => {

    const propiedades = await Propiedad.findAll({
        include: [
            {model: Precio, as: 'precio'},
            {model: Categoria,}
        ]
    });

    res.json(propiedades)
}


export {
    propiedades
}