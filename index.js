let server = require('./server');
let router = require('./router');      //router모듈 소환
let requestHandler = require('./requestHandler');

server.start(router.route, requestHandler.handle);