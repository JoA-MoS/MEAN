var express = require("express");
var app = express();

let count = 0;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    count = count + 1;
    response.render('index', { counter: count });
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})
