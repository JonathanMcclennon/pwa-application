const express = require('express')
const spdy = require('spdy')
const path = require('path')
const fs = require('fs')
const https = require('https');
const app = express()
const port = process.env.PORT || 3001;
const options = {
    key: fs.readFileSync(__dirname + '/server.key'),
    cert: fs.readFileSync(__dirname + '/server.crt')
}

app.use('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(express.static('public'))
app.use(express.static(__dirname + '/pwa-app/build'))

app.get('/api/ppvs', (req, res) => {
    const ppvJson = require('./responses/ppvs.json');
    res.json(ppvJson)
});

app.get('/api/ppvs/:id', (req, res) => {
    let ppvJson;
    const id = req.params.id;
    try {
        ppvJson = require(`./responses/ppvs/${id}.json`);
    } catch (e) {
        console.info(e);
        return res.status(404).end()
    }
    res.json(ppvJson)
});

app.get('/pwa-app', (req, res) => {
    if (process.env.HTTP2) {
    const filename = '9ccd6684';
    const js = fs.readFileSync(__dirname + '/pwa-app/build/static/js/main.'+filename+'.js')
    const css = fs.readFileSync(__dirname + '/pwa-app/build/static/css/main.58e36bd4.css');
    var stream = res.push('/static/js/main.'+filename+'.js', {
        status: 200, // optional 
        method: 'GET', // optional 
        request: {
            accept: '*/*'
        },
        response: {
            'content-type': 'application/javascript'
        }
    });
    stream.on('error', function () {
    });
    stream.end(js);

     var cssStream = res.push('/static/css/main.58e36bd4.css', {
        status: 200, // optional 
        method: 'GET', // optional 
        request: {
            accept: '*/*'
        },
        response: {
            'content-type': 'text/css'
        }
    });
    cssStream.on('error', function () {
    });
    cssStream.end(css);
    }
    res.sendFile(__dirname + '/pwa-app/build/index.html')
});

app.get('/pwa-app/*', (req, res) => {
    res.sendFile(__dirname + '/pwa-app/build/index.html')
})

//const server = https.createServer(options, app);
//server.listen(3001);
//app.listen(3001, () =>console.log('Example app listening on port 3001!'))

spdy
    .createServer(options, app)
    .listen(port, (error) => {
        if (error) {
            console.error(error)
            return process.exit(1)
        } else {
            console.log('Listening on port: ' + port + '.')
        }
    });