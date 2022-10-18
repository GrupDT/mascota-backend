
import {Mascota} from './Mascotas.js'
import {Adapcion} from './Adapciones.js'


Adapcion.belongsTo(Mascota, { foreignKey: 'id_mascota' })
Mascota.hasMany(Adapcion, { foreignKey: 'id_mascota' })

export {
    Mascota,Adapcion
}