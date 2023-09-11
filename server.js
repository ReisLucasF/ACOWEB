const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

// Pasta onde o arquivo JSON será armazenado
const dataDir = path.join(__dirname, 'data');
const dataFilePath = path.join(dataDir, 'redirecionamentos.json');

// Verifique se o diretório e o arquivo JSON existem, crie-os se não existirem
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, '[]');
}

// Configuração do Express para analisar dados JSON
app.use(bodyParser.json());

// Servir os arquivos HTML, CSS e JavaScript estáticos
app.use(express.static('public'));

// Rota para obter todos os redirecionamentos
app.get('/api/redirecionamentos', (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFilePath));
    res.json(data);
});

// Rota para adicionar um novo redirecionamento
app.post('/api/redirecionamentos', (req, res) => {
    const newData = req.body;
    const data = JSON.parse(fs.readFileSync(dataFilePath));
    data.push(newData);
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2)); // Use null, 2 para formatação bonita
    res.json(newData);
});

// Rota para deletar um redirecionamento
app.delete('/api/redirecionamentos/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    let data = JSON.parse(fs.readFileSync(dataFilePath));
    data = data.filter(item => item.codigo !== codigo);
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    res.json({ message: 'Redirecionamento deletado' });
});

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});