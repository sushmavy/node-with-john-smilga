const { readFile, writeFile } = require('fs');

readFile( './content/first.txt', 'utf-8', ( err, result) => {

    if( err ){
        console.error(`Error with code  : ${err}`);
        return;
    }

    console.log( `Contents read from first.txt file : ${result}` );

    const first = result;

    readFile('./content/second.txt', 'utf-8', ( err, result) => {
            if( err ){
                console.error(`Error with code  : ${err}`);
                return;
            }

            const second = result;

            //Flag = "a"  is not working in async.
            writeFile( './content/results-async.txt', first + second, { flag: 'a'}, ( err ) => {

                if( err ){
                        console.log(`Error in writing the to the file : ${err}`);
                }
            });
    });
})