const express = require('express');
const app = express();
const PORT = 3000;

app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nome: 'Danielly' },
        { id: 2, nome: 'Carlos' }
    ]);
});

app.get('/tarefas', (req, res) => {
    res.json([
        { id: 1, descricao: 'Finalizar a API' },
        { id: 2, descricao: 'Revisar o código' }
    ]);
});

app.get('/reservas', (req, res) => {
    res.json([
        { id: 1, sala: 'Laboratório 01', data: '2020' }
    ]);
});

app.get('/status', (req, res) => {
    res.send('Sistema ativo e operando normalmente.');
});

app.get('/turmas', (req, res) => {
    res.json(['Turma A', 'Turma B', 'Turma C']);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/usuarios`);
    console.log(`http://localhost:${PORT}/tarefas`);
    console.log(`http://localhost:${PORT}/reservas`);
    console.log(`http://localhost:${PORT}/status`);
    console.log(`http://localhost:${PORT}/turmas`);
});