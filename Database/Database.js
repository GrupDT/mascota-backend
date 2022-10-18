import Sequelize from 'sequelize';

/**
 * Creamos conexion a nuestra base de datos
 */
const sequelize = new Sequelize('mascotas', 'postgres', 'postgres', {
    host: 'localhost',
    dialect:'postgres'
  });

  export {
    sequelize
  }