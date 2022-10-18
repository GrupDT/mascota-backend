import { DataTypes } from 'sequelize';
import { sequelize } from '../Database/Database.js';

export const Mascota = sequelize.define('mascotas', {

    id_mascota: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
        
    },
    imagen:{
        type:DataTypes.STRING
    },
    descripcion:{
        type:DataTypes.STRING
    },
    categoria:{
        type:DataTypes.INTEGER
    }

})


