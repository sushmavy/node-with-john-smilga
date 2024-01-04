const path = require('path');

console.log(`Path separator is ${path.sep}`);

console.log( `Joined path is ${path.join('content', 'sub-folder', 'test.txt' )}` );

const base = path.basename(path.join('content', 'sub-folder', 'test.txt' ));

console.log('base is ' + base );

const absolute = path.resolve( __dirname, 'content', 'sub-folder', 'test.txt');

console.log(`Absolute path ${absolute}`)