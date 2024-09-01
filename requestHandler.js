
const mariadb = require('./database/connect/mariadb');


function main(response){
    console.log('main');

    mariadb.query("SELECT * FROM product",function(err, rows){
        console.log(rows);
    })
    
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write('Main page');
    response.end();
}
function login(response){
    console.log('login');

    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write('Login page');
    response.end();
}


let handle={};  //key:value- 딕셔너리

handle['/'] = main;
handle['/login'] = login;

exports.handle = handle;