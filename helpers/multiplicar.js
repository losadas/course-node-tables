const fs = require('fs')
const colors = require('colors')
const crearArchivo = async (base, listar, hasta) => {
  try {
    let salida = ''
    for (let index = 0; index < hasta; index++) {
      salida += `${base} x ${index + 1} = ${base * (index + 1)}\n`
    }

    const nameFile = `./salida/tabla-del-${base}.txt`
    fs.writeFileSync(nameFile, salida)

    if (listar) {
      console.log('======================='.green)
      console.log(`     Tabla del ${base}`.cyan)
      console.log('======================='.green)
      console.log(salida)
    }
    return nameFile
  } catch (error) {
    throw error
  }
}
module.exports = crearArchivo
