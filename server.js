let http = require('http');

let url = require('url');

function start(route){
    function onRequest(request, response){

        let pathname = url.parse(request.url).pathname;  //요청받은 url을 읽어서 그 경로가 어떻게 되는지 확인하여 변수에 담는다.
        route(pathname);
        
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write('Hello Node.js');
        response.end();
    }
    
    http.createServer(onRequest).listen(8888);
    //localhost:8888

}


exports.start=start;