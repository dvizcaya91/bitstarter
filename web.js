var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fil=express.readFileSync(index.html);
  response.send(fil);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
