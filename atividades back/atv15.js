const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [];
let tarefas = [];

app.post('/usuarios', (req, res) => {
    const { id, nome, email } = req.body;
    const novoUsuario = { id, nome, email };
    usuarios.push(novoUsuario);
    res.status(201).json({ sucesso: true, usuarioCriado: novoUsuario });
});

app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }
    res.status(200).json(usuario);
});

app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    const index = usuarios.findIndex(u => u.id === id);
    if (index === -1) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }
    usuarios[index] = { id, nome, email };
    res.status(200).json({ sucesso: true, usuarioAtualizado: usuarios[index] });
});

app.patch('/usuarios/:id/nome', (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }
    usuario.nome = nome;
    res.status(200).json({ sucesso: true, nomeAtualizado: usuario });
});

app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const index = usuarios.findIndex(u => u.id === id);
    if (index === -1) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }
    const deletado = usuarios.splice(index, 1);
    res.status(200).json({ sucesso: true, usuarioRemovido: deletado[0] });
});

app.post('/tarefas', (req, res) => {
    const { id, nome, prioridade } = req.body;
    const novaTarefa = { id, nome, prioridade };
    tarefas.push(novaTarefa);
    res.status(201).json({ sucesso: true, tarefaCriada: novaTarefa });
});

app.get('/tarefas', (req, res) => {
    res.status(200).json(tarefas);
});

app.get('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const tarefa = tarefas.find(t => t.id === id);
    if (!tarefa) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
    res.status(200).json(tarefa);
});

app.put('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const { nome, prioridade } = req.body;
    const index = tarefas.findIndex(t => t.id === id);
    if (index === -1) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
    tarefas[index] = { id, nome, prioridade };
    res.status(200).json({ sucesso: true, tarefaAtualizada: tarefas[index] });
});

app.patch('/tarefas/:id/nome', (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    const tarefa = tarefas.find(t => t.id === id);
    if (!tarefa) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
    tarefa.nome = nome;
    res.status(200).json({ sucesso: true, nomeAtualizado: tarefa });
});

app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const index = tarefas.findIndex(t => t.id === id);
    if (index === -1) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
    const deletada = tarefas.splice(index, 1);
    res.status(200).json({ sucesso: true, tarefaRemovida: deletada[0] });
});

app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000");
});
