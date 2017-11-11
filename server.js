const express = require('express')
const app = express()

app.get('/api/ppvs', (req, res) => {
    const ppvJson = require('./responses/ppvs.json');
    res.json(ppvJson)
});

app.get('/api/ppvs/:id', (req, res) => {
    let ppvJson;
    const id = req.params.id;
    try {
        ppvJson = require(`./responses/ppvs/${id}.json`);
    } catch(e) {
        console.info(e);
        return res.status(404).end()
    }
    res.json(ppvJson)
});

app.listen(3001, () => console.log('Example app listening on port 3001!'))