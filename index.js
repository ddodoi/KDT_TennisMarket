let server = require('./server');
let router = require('./router');      //router모듈 소환

server.start(router.route);