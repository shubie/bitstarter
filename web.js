var express = require('express');
var app = express();
var fs = require('fs');
var htmlfile = "index.html";
app.use(express.logger());

app.get('/', function(request, response) {
	var html = fs.readFileSync(htmlfile).toString();
	response.send(html);
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
