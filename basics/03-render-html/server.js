let http = require('http');
let fs = require('fs');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plane'});
    fs.readFile('./index.html', null, function(error, date){
        if(error){
            response.writeHead(404);
            response.write('file not found')
        }
    })
    response.end();
}

http.createServer(onRequest).listen(8000);