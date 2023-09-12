const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();
const path = require('path');

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

let db;

async function run() {
  try {
    db = await mysql.createConnection(process.env.DATABASE_URL);
    console.log("Conexão bem-sucedida ao MySQL");
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  } catch (error) {
    console.dir(error);
  }
}

run();

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/adm.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'adm.html'));
});

app.use(bodyParser.json());

// Rota para obter todos os redirecionamentos
app.get('/api/redirecionamentos', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM redirecionamentos');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para adicionar um novo redirecionamento
app.post('/api/redirecionamentos', async (req, res) => {
  try {
    const [result] = await db.execute('INSERT INTO redirecionamentos SET ?', [req.body]);
    res.json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para deletar um redirecionamento
app.delete('/api/redirecionamentos/:id', async (req, res) => {
  try {
    const [result] = await db.execute('DELETE FROM redirecionamentos WHERE id = ?', [req.params.id]);
    console.log("Resultado da deleção:", result); 
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Nenhum redirecionamento encontrado com esse ID' });
    }
    res.json({ message: 'Redirecionamento deletado' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;