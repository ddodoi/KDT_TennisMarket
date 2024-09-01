let server = require('./server');
let router = require('./router');      //router모듈 소환
let requestHandler = require('./requestHandler');

const mariadb = require('./database/connect/mariadb');   
mariadb.connect();          //db연결

server.start(router.route, requestHandler.handle);