var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var indexFileBuffer= fs.readFileSync("index.html");
  var greeting=indexFileBuffer.toString;
  response.send(greeting);
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
