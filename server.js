const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

// Rota GET para buscar todos os clientes
app.get("/clients", function (req, res) {
    res.json(data);
});

// Rota GET para buscar um cliente específico por ID
app.get("/clients/:id", function (req, res) {
    const clientId = parseInt(req.params.id);
    const client = data.find(c => c.id === clientId);

    if (!client) {
        return res.status(404).json({ error: "Cliente não encontrado" });
    }

    res.json(client);
});

// Rota POST para adicionar um novo cliente
app.post("/clients", function (req, res) {
    const newClient = req.body;
    data.push(newClient);
    res.status(201).json(newClient);
});

// Rota PUT para atualizar um cliente
app.put("/clients/:id", function (req, res) {
    const clientId = parseInt(req.params.id);
    const index = data.findIndex(c => c.id === clientId);

    if (index === -1) {
        return res.status(404).json({ error: "Cliente não encontrado" });
    }

    data[index] = { ...data[index], ...req.body };
    res.json(data[index]);
});

// Rota DELETE para remover um cliente
app.delete("/clients/:id", function (req, res) {
    const clientId = parseInt(req.params.id);
    const index = data.findIndex(c => c.id === clientId);

    if (index === -1) {
        return res.status(404).json({ error: "Cliente não encontrado" });
    }

    const deletedClient = data.splice(index, 1);
    res.json({ message: "Cliente removido com sucesso", deletedClient });
});

// Inicializando o servidor
app.listen(3000, function () {
    console.log("Server is running on http://localhost:3000");
});
