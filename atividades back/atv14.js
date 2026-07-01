const express = require('express');
const app = express();

app.use(express.json());

app.post('/avisos', (req, res) => {
    const { titulo, conteudo, dataPublicacao } = req.body;
    res.status(201).json({
        sucesso: true,
        avisoCadastrado: { titulo, conteudo, dataPublicacao }
    });
});

app.post('/tarefas', (req, res) => {
    const { nome, descricao, prioridade } = req.body;
    res.status(201).json({
        sucesso: true,
        tarefaCriada: { nome, descricao, prioridade }
    });
});

app.post('/usuarios', (req, res) => {
    const { nome, email, senha } = req.body;
    res.status(201).json({
        sucesso: true,
        usuarioRegistrado: { nome, email, senha }
    });
});

app.post('/reservas', (req, res) => {
    const { espaco, data, horario } = req.body;
    res.status(201).json({
        sucesso: true,
        reservaConfirmada: { espaco, data, horario }
    });
});

app.listen(3000, () => {
    console.log("Servidor ativo, porta 3000");
});

