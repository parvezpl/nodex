var http = require('http');
http.createServer(function(req, res) {
    res.write("hello world!33");
    res.write("hi world");
    res.end();

}).listen(8080)
