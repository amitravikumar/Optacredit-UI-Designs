var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router(require('./db.js')());
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3006, function() {
  console.log('Server is running!');
})

//To run a single server, in the package.json the start can be replaced with *json-server -p 3006 -w db.json* db.json is the file name that we want to run on the server