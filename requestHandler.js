const fs = require('fs');     //우리가 만든 html을 가져올수 있게 해주는 모듈
const main_view = fs.readFileSync('./main.html','utf-8');

const mariadb = require('./database/connect/mariadb');


function main(response){
    console.log('main');

    mariadb.query("SELECT * FROM product",function(err, rows){
        console.log(rows);
    })
    
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write(main_view);
    response.end();
}
function login(response){
    console.log('login');

    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write('Login page');
    response.end();
}

function redRacket(response){
    fs.readFile('./img/redRacket.png',function(err,data){
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    });
}

function blueRacket(response){
    fs.readFile('./img/blueRacket.png',function(err,data){
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    });
}

function blackRacket(response){
    fs.readFile('./img/blackRacket.png',function(err,data){
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    });
}

let handle={};  //key:value- 딕셔너리

handle['/'] = main;
handle['/login'] = login;

/* image directory*/
handle['/img/redRacket.png'] = redRacket;
handle['/img/blueRacket.png'] = blueRacket;
handle['/img/blackRacket.png'] = blackRacket;


/*css directory*/


exports.handle = handle;