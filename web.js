var express = require('express');
var fs=require("fs"), sys=require("sys");
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fil=fs.readFileSync('index.html',"utf8");
  response.send(fil);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
