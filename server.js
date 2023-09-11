const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectID } = require('mongodb');
require('dotenv').config();
const path = require('path');

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tls: true,
  tlsInsecure: true,
});

let db;

async function run() {
  try {
    await client.connect();
    db = client.db('acowebb');
    console.log("Conexão bem-sucedida ao MongoDB");
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
    const collection = db.collection('redirecionamentos');
    const data = await collection.find().toArray();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para adicionar um novo redirecionamento
app.post('/api/redirecionamentos', async (req, res) => {
  try {
    const collection = db.collection('redirecionamentos');
    const result = await collection.insertOne(req.body);
    res.json({ id: result.insertedId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para deletar um redirecionamento
app.delete('/api/redirecionamentos/:id', async (req, res) => {
  try {
    const collection = db.collection('redirecionamentos');
    const result = await collection.deleteOne({ _id: new ObjectID(req.params.id) });
    console.log("Resultado da deleção:", result);  // Log do resultado no console do servidor
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Nenhum redirecionamento encontrado com esse ID' });
    }
    res.json({ message: 'Redirecionamento deletado' });
  } catch (err) {
    console.error(err);  // Log do erro no console do servidor
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
