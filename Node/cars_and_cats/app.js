var fs = require('fs'),
    http = require('http'),
    port = 7077;

var server = http.createServer(function server(req, res) {
    // Figure out which file the HTTP request is looking for
    var file;
    var type;
    console.log(req);
    console.log(req.url)
    switch (req.url) {
        case "/":
            file = './views/index.html';
            break;
        case "/cars":
            file = './views/cars.html';
            break;
        case "/cats":
            file = './views/cats.html';
            break;
        default:
            file = null;
            if (req.url.includes(".css")) {
                file = '.' + req.url;
                type = "text/css";
            }
            if (req.url.includes(".jpg")) {
                file = '.' + req.url;
                type = "image/jpg";
            }
            break;
    }
    // Send file or error to browser
    if (file !== null) {
        // First argument uses string interpolation  
        console.log(file);
        type = type || 'text/html';
        fs.readFile(`${file}`, 'utf8', function (err, contents) {
            if (err) { console.log(err); }
            res.writeHead(200, { 'Content-Type': type });
            res.write(contents);
            res.end();
        });
    } else { // If file is null, not found
        res.writeHead(404);
        res.end("File not found!");
    }
});

server.listen(port, function () {
    console.log("Running on port: ", port);
});
