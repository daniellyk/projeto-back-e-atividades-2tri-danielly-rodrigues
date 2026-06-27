const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('aaaaaaaaaaaaa');
});

app.get('/sobre', (req, res) => {
    res.send('bbbbbbbbbbbbbbbbbb');
});

app.get('/equipe', (req, res) => {
    res.send('cccccccccccccccccc');
});

app.get('/contato', (req, res) => {
    res.send('dddddddddddddddddd');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log(`http://localhost:${PORT}/sobre`);
    console.log(`http://localhost:${PORT}/equipe`);
    console.log(`http://localhost:${PORT}/contato`);
});
