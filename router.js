function route(pathname, handle, response){
    console.log('pathname: '+ pathname);

    handle[pathname];
}

exports.route = route;