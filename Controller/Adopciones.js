import {Adapcion,Mascota} from '../Models/index.js';

/**
 * getAdapciones
 * obtener el listado de adopciones
 * @param {*} req 
 * @param {*} res 
 */
const getAdapciones = async(req,res) => {
    try {
        
        const response =await Adapcion.findAll();

        res.status(200).json(response)

    } catch (error) {

        res.status(404).json(`mensaje:,${error}`)
        console.log('error')
        
    }
}

/**
 * obtener el listado de adopciones incluyendo la información de la mascota
 * @param {*} req 
 * @param {*} res 
 */
const getAll = async(req,res) => {
    try {
        
        const response =await Adapcion.findAll(
            {
                include: [{
                    model: Mascota,
                    
                }
            ]
            }
        );

        res.status(200).json(response)

    } catch (error) {

        res.status(404).json(`mensaje:,${error}`)
        console.log('error')
        
    }
}

/**
 * Registrar adopcion
 * @param {*} req 
 * @param {*} res 
 */

const postAdapcion = async( req,res) => {
    try {

        const {nombre,telefono,correo,id_mascota} = req.body

        const newAdapcion = await Adapcion.create({
            
            nombre,telefono,correo,id_mascota
        })

        res.status(200).json(newAdapcion)
        
    } catch (error) {
        res.status(404).json(`mensaje:,${error}`)
    }
}

/**
 * Eliminar adopcion
 * @param {*} req 
 * @param {*} res 
 */
const deleteAdapciones = async(req,res) => {
    try {

        const {id} = req.params;

        const response = await Adapcion.destroy({
            where:{
                id
            }
        })

        res.status(200).json(
            {
                body:{
                    id
                }
            }
        )
        
    } catch (error) {
        res.status(404).json(`mensaje:,${error}`)
    }
}

/**
 * Actualizar registro de adopcion
 * @param {*} req 
 * @param {*} res 
 */
const putAdapciones = async(req,res) => {
    try {

        const {id} = req.params;

        const {id_mascota,cedula} = req.body

        const oldAdapcion = await Adapcion.findByPk(id);
        
        oldAdapcion.id_mascota = id_mascota;
        oldAdapcion.cedula = cedula;
        const modAdapcion =await oldAdapcion.save()



        res.status(200).json(
           modAdapcion
        )
        
    } catch (error) {
        res.status(404).json(`mensaje:,${error}`)
    }
}
export {
    getAdapciones,
    postAdapcion,
    deleteAdapciones,
    putAdapciones,
    getAll
}