
const importedNames = require('./utils-consts-module');
const sayHi = require('./module-sayhi');
const alternative = require('./utils-alternative-flavour-exports-module')

// console.log( importedNames );
// console.log(module);

require('./utils-mind-grenade');

sayHi(importedNames.syp);
sayHi(alternative.items)
sayHi(alternative.singlePerson.name)