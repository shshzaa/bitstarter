var express = require('express');
var app = express();
var file = require('fs');
var buffer = fs.readFileSync('index.html');
var data = buffer.toString("utf-8");

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
