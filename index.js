import express from 'express';
import cors from 'cors';

import {routerMascota,routerAdopcion}  from './Routes/index.js';

import {sequelize} from './Database/Database.js';


/**
 * Esta funcion realiza un test de conexion y autenticacion de la base de datos
 */
const testdb = async() => {
    try {
        await sequelize.authenticate();

        // await Mascota.sync({force:true})
        // await Cliente.sync({force:true})
        // await Adapcion.sync({force:true})
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}


const app = express();
app.use(cors())
app.use(express.json({ extended: false }))
app.use(express.static('storage'))



app.use(routerMascota)
app.use(routerAdopcion)

const PORT  = process.env.PORT | 3000

testdb()

app.listen(5000,() => {
  console.log('servidor activo en el puerto 5000')
})



