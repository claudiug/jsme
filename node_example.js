var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text.plain'})
    res.end('Hallo')
}).listen(3000);


console.log('start');
