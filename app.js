const crearArchivo = require('./helpers/multiplicar')
const colors = require('colors')
const argv = require('./config/yargs')
const base = argv.b
const listar = argv.l
const hasta = argv.h
console.clear()
crearArchivo(base, listar, hasta)
  .then((nameFile) => console.log(`${nameFile} creado correctamente`.rainbow))
  .catch((err) => console.log(err))
