const generate = require('../generate.js');

const input = [
  {type: 'input', name: 'name', message: 'Package name?'},
];

module.exports = () => generate('ts', input);