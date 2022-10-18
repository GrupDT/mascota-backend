
import multer from 'multer';

/**
 * storage
 * destination nos permite definir el destino donde se guardara nuestra archivo 
 * filname nos permite definir el nombre como vamos a guardar nuestro archivo
 */

const storage = multer.diskStorage({

     
    destination: (req,file,cb)=> {
      
        const pathStorage = `${process.cwd()}/storage`
        console.log('multer')
        cb(null,pathStorage)
    },
    filename:(req,file,cb)=> {
        const {id_mascota} =req.body
        const ext = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${ext}`
        cb(null,filename)
    }
})

/**
 * cargarImagenMiddleware
 * esta funcion nos permiter realizar configuracion para extrar la informacion de nuestro archivo
 */
export const cargarImagenMiddleware = multer({storage})




