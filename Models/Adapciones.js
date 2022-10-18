import { DataTypes } from 'sequelize';
import { sequelize } from '../Database/Database.js';


export const Adapcion = sequelize.define('adopciones', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    correo: {
        type: DataTypes.STRING,
       
    },
    telefono: {
        type: DataTypes.STRING,
       
    },
    
    
    id_mascota: {
        type: DataTypes.INTEGER,
        references: {
            key: "id_mascota",
            model: "mascotas"
        }

    }
   
});

