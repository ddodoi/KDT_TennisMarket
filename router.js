function route(pathname, handle, response){
    console.log('pathname: '+ pathname);

    handle[pathname](response);
}

exports.route = route;