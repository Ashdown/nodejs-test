const http = require('http');

http.createServer((req, res) => {
    //1 tell the browser everything is ok (code 200), and the data is in plain text
    res.writeHead(200, {
        'Content-Type' : 'text/plain'
    });
    //2 write text to body of the page
    res.write('Hello World\n');
    //3 tell the sever that all the response header and body have been sent
    res.end();
}).listen(1337);