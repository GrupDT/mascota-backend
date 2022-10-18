import { Router } from 'express';
import { getAdapciones, postAdapcion, putAdapciones, deleteAdapciones, getAll } from '../Controller/Adopciones.js';
import { cargarImagenMiddleware } from '../utils/cargarImagen.js';

/**
 * definimos las rutas necesarias para atender las peticiones de adopcion
 */

export const routerAdopcion = Router();

routerAdopcion.post('/adopciones', cargarImagenMiddleware.single("imagen"), postAdapcion)

routerAdopcion.get('/adopcionesAll', getAll)

routerAdopcion.get('/adopciones', getAdapciones)

routerAdopcion.put('/adopciones/:id', putAdapciones)

routerAdopcion.delete('/adopciones/:id', deleteAdapciones)





