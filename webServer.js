const { sleep, formatDate } = require('../EmiliaBot/functions/basic')
const { readdirSync } = require('fs');
const http = require('http');
const port = 8080;
const server = http.createServer(async (req, res) => {

    if (req.url == '/') {
        const html = readdirSync(`./web`).filter(f => f === "home.html")
        const css = readdirSync('./web/css').filter(f => f === "home.css")
        const js = readdirSync('./web/js').filter(f => f === "home.js")

            res.writeHead(200, { content: "text/css"})
            res.write(css, html, js);
            console.log('here')
        
    } else if (req.url == '/commands') {
        res.write("Page not written yet.")
    }

    res.end()
});

server.listen(port, () => console.log(`server is listening on port ${port}`));
