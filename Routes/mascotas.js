import { Router } from 'express';

import { getMascotas, getMascotasById, getMascotasByCategoria, postMascota, deleteMascotas, putMascotas } from '../Controller/Macotas.js';
import { cargarImagenMiddleware } from '../utils/cargarImagen.js';

/**
 * definimos las rutas necesarias para atender las peticiones de adopcion
 */

export const routerMascota = Router();

routerMascota.post('/mascotas', cargarImagenMiddleware.single("imagen"), postMascota)

routerMascota.get('/mascotas', getMascotas)

routerMascota.get('/mascotas/:id', getMascotasById)

routerMascota.get('/mascotasCategoria/:id', getMascotasByCategoria)

routerMascota.put('/mascotas/:id', cargarImagenMiddleware.single("imagen"), putMascotas)

routerMascota.delete('/mascotas/:id', deleteMascotas)








