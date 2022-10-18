import { Mascota } from '../Models/Mascotas.js';

const urlBase ="http://localhost:5000"


/**
 * obtener el listado de mascotas registradas
 * @param {*} req 
 * @param {*} res 
 */

const getMascotas = async (req, res) => {
    try {

        const response = await Mascota.findAll();

        res.status(200).json(response)

    } catch (error) {

        res.status(404).json(`mensaje:,${error}`)

    }
}

/**
 * obtener listado de mascotas por el id de categoria: perro|gato
 * @param {*} req 
 * @param {*} res 
 */

const getMascotasByCategoria = async (req, res) => {
    try {

        const { id } = req.params;

        const response = await Mascota.findAll({
            where: {
                categoria: id
            }
        })

        res.status(200).json(response)

    } catch (error) {

        res.status(404).json(`mensaje:,${error}`)

    }
}

/**
 * buscar mascota por su id 
 * @param {*} req 
 * @param {*} res 
 */

const getMascotasById = async (req, res) => {
    try {

        const { id } = req.params;

        const response = await Mascota.findOne({
            where: {
                id_mascota: id
            }
        })

        res.status(200).json(response)

    } catch (error) {

        res.status(404).json(`mensaje:,${error}`)

    }
}


/**
 * Registrar mascota
 * @param {*} req 
 * @param {*} res 
 */
const postMascota = async (req, res) => {
    try {

        console.log("mascota")
        const { file } = req

        const imagen = `urlBase/${file.filename}`


        const { id_mascota, nombre, descripcion, categoria } = req.body

        const newMascota = await Mascota.create({
            id_mascota,
            nombre,
            descripcion,
            categoria,
            imagen
        })

        res.status(200).json(newMascota)

    } catch (error) {
        res.status(404).json(`mensaje:,${error}`)
    }
}

/**
 * Elimnar mascota
 * @param {*} req 
 * @param {*} res 
 */

const deleteMascotas = async (req, res) => {
    try {

        const { id } = req.params;

        const response = await Mascota.destroy({
            where: {
                id_mascota: id
            }
        })

        res.status(200).json(
            {
                body: {
                    id
                }
            }
        )

    } catch (error) {
        res.status(404).json(`mensaje:,${error}`)
    }
}

/**
 * actualizar mascota
 * @param {*} req 
 * @param {*} res 
 */
const putMascotas = async (req, res) => {
    try {

        const { id } = req.params;

        var { file } = req

        const imagen = `urlBase/${file.filename}`

        const { nombre, descripcion, categoria } = req.body


        let oldMascota = await Mascota.findByPk(id);

        oldMascota.nombre = nombre;
        oldMascota.descripcion = descripcion;
        oldMascota.categoria = categoria;
        oldMascota.imagen = imagen;

        const modMascota = await oldMascota.save()

        res.status(200).json(
            modMascota
        )

    } catch (error) {
        res.status(404).json(`mensaje:,${error}`)
    }
}
export {
    getMascotas,
    getMascotasById,
    getMascotasByCategoria,
    postMascota,
    deleteMascotas,
    putMascotas
}