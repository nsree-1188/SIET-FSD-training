const http = require('http');
const serv = http.createServer(async (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    // res.write(req.hostname);
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Hi user, You are accessing the following url</h1>");
    res.write(`<p>URL: http://localhost:${req.rawHeaders[6]} /${req.url}</p>`);
    res.write("</body>");
    res.write("</html>");
    res.write(req.url);
    console.log(req.url);
    res.end();
}).listen(8000);
