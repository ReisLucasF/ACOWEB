require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
const port = 3000;

// Crie a conexão com o banco de dados
const connection = mysql.createConnection(process.env.DATABASE_URL);

// Configuração do Express para analisar dados JSON
app.use(bodyParser.json());

// Servir os arquivos HTML, CSS e JavaScript estáticos
app.use(express.static('public'));

// Rota para obter todos os redirecionamentos
app.get('/api/redirecionamentos', (req, res) => {
    connection.query('SELECT * FROM redirecionamentos', function (err, results) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Rota para adicionar um novo redirecionamento
app.post('/api/redirecionamentos', (req, res) => {
    console.log('Dados recebidos:', req.body); // Adicione essa linha para log dos dados recebidos
    const newData = req.body;
    connection.query('INSERT INTO redirecionamentos SET ?', newData, function (err, results) {
        if (err) {
            console.error('Erro SQL:', err); // Adicione essa linha para log do erro SQL
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: results.insertId, ...newData });
    });
});

// Rota para deletar um redirecionamento
app.delete('/api/redirecionamentos/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    connection.query('DELETE FROM redirecionamentos WHERE codigo = ?', [codigo], function (err, results) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Redirecionamento deletado' });
    });
});

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});