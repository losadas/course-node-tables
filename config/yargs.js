const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    demandOption: false,
    describe: 'Opción para mostrar la tabla de multiplicar'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    demandOption: false,
    describe: 'Opción para el límite de la multiplicación'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número'
    }
    return true
  }).argv
module.exports = argv
