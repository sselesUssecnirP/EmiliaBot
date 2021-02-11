 module.exports = {
    name: "*webServer",
    description: "Creates a webServer",
    run: () => {
        const fs = require('fs')
        const http = require('http')
        const port = 8080
        const server = http.createServer(async (req, res) => {
            let html = await fs.open('./web/home.html')

            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(html)

            let css = await fs.open('./web/css/home.css')
    
            res.writeHead(200, { 'Content-Type': 'text/css'})
            res.write(css)
            res.end()
        });

        server.listen(port, () => console.log(`server is listening on port ${port}`))
    }
}