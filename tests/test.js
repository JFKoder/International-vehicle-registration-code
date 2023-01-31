var IVRC = require('../index.js')
var ivrc = new IVRC();

console.log("Find Au: "+JSON.stringify(ivrc.findByName('Aus')))
console.log("Find Au: "+JSON.stringify(ivrc.findByCode('Aus')))
console.log("Find Au: "+JSON.stringify(ivrc.findByName('AU')))
console.log("Find Au: "+JSON.stringify(ivrc.findByCode('AU')))
console.log("Find Au: "+JSON.stringify(ivrc.findByName('au')))
console.log("Find Au: "+JSON.stringify(ivrc.findByCode('au')))