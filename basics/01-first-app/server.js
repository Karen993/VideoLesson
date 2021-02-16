let http = require('http');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plane'});
    response.write('Hello world');
    response.end();
}

http.createServer(onRequest).listen(8001);