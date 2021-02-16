let url = require('url');
let fs = require('fs');

function renderHTML(path,response){
    fs.readFile(path, null, function(error, date){
        if(error){
            response.writeHead(404);
            response.write('file not found')
        }else{
            response.write(date)
        }
        response.end();
    })
}

module.exports = {
  handleRequest: function(request, response){
      response.writeHead(200, {'Content-Type':'text/html'});

      /*console.log("url " + request.url);
      const myUrl = new URL(request.url);*/
      let path = request.url;
      console.log("url " + request.url);

      switch (path) {
          case '/':
              renderHTML('./index.html', response);
              break;
          case '/login':
              renderHTML('./login.html',response);
              break;
          default:
              response.writeHead(404);
              response.write('Route not defined');
              response.end();


      }

  }

};