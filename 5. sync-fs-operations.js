const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync( './content/result-sync.txt', `Here is the result: ${first}, ${second}\n`, { flag: 'a'})
console.log( first );
console.log( second );