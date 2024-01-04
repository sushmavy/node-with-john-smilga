const os = require('os');

console.log(os.userInfo());
console.log(os.availableParallelism());
console.log(os.cpus());

//method returns the system uptime in seconds
console.log( `The system uptime is ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log( currentOS );