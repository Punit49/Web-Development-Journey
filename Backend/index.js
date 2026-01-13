// Creating server using node -
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == "/about"){
        res.end("About page");
    }
    else if (req.url == "/contact"){
        res.end("COntact page");
    }

    else if(req.url == "/"){
        res.end("Home page");
    }

    else {
        res.end("lol");
    }
});

server.listen(3000); 