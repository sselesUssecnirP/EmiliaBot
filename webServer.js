
const { readdirSync } = require('fs')
const http = require('http')
const port = process.env.PORT
const server = http.createServer(async (req, res) => {
    let html = await readdirSync(`./web`).filter(f => f == 'home.html')
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(html)

    let css = await readdirSync(`./web`).filter(f => f == 'home.css')
    
    res.writeHead(200, { 'Content-Type': 'text/css'})
    res.write(css)
    res.end()
});

server.listen(port, () => console.log(`server is listening on port ${port}`))
