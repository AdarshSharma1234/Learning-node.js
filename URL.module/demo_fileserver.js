var http = require('http');// server client http
var url = require("url");//The url module provides 
//utilities for URL resolution and parsing. It can be accessed using:

var fs = require('fs');//The fs module enables
// interacting with the file system in a way modeled on standard POSIX functions.


http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    var filename = "." + q.pathname;
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'Content-type': "text/html"});
            return res.end("404 Not Found");
        }
        res.writeHead(200,{'Content-type': "text/html"});//Sends a response header
        //  to the request. The status code
        //   is a 3-digit HTTP status code, 
        //   like 404. The last argument, headers, 
        //   are the response headers. Optionally
        //    one can give a human-readable statusMessage
        //     as the second argument.
        res.write(data);
        return res.end();
    });
}).listen(8080); //http://localhost:8080/summer.html
//http://localhost:8080/winter.html
