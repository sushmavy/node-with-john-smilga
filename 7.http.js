const http = require('http');
const server = http.createServer(( req, res ) => {

    console.log('Reques is : ' + req.url );

    //Status is not being written explicitly here.

    if( req.url === '/') res.end("Welcome to our home page")
    if( req.url === '/about') res.end('Welcome to our about page')

    res.end(`<h1>Ooops</h1>
             <p>We can't seem to find the page you are looking for</p>
             <a href="/"> back home </a>
    `);
});

server.listen(5000);