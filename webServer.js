const { sleep, formatDate } = require('./functions/basic')
const fs = require('fs');
const http = require('http');
const port = 8080;
const server = http.createServer(async (req, res) => {

    if (req.url == '/') {
        fs.readFileSync(`${__dirname}/web/home.html`, (err, css) => {
            if (err) console.error(err);
            console.log(css)
            
            res.writeHead(200, { content: "text/css"})
            res.write(css);
            console.log('here')
        });

        fs.readFileSync('./web/css/home.css', (err, html) => {
            if (err) console.error(err);
            console.log(html)

            res.writeHead(200, { content: "text/html"})
            res.write(html);
            console.log('here')
        });
        
    } else if (req.url == '/commands') {
        res.write("Page not written yet.")
    }

    res.end()
});

server.listen(port, () => console.log(`server is listening on port ${port}`));
