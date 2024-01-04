//Globals

// no window object in node.
//Other globalbs __dirname, __filename, require, module, process

console.log(__dirname);
console.log(__filename);
console.log(process);

setInterval( () => { console.log('Hello world'); }, 1000 );