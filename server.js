// Require Dependencies
const express = require('express');
const app = express()
const port = 3000

app.get('/greeting/:name', (req, res) => {
    res.send('Hello ' + req.params.name + ". How are you?")
});

app.listen(port, () => {
    console.log('Express is running on ' + port)
});