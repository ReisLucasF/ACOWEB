const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectID } = require('mongodb');
require('dotenv').config();
const { ObjectId } = require('mongodb');
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

//obter todos os redirecionamentos
app.get('/api/redirecionamentos', async (req, res) => {
  try {
    const collection = db.collection('redirecionamentos');
    const data = await collection.find().toArray();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//adicionar um novo redirecionamento
app.post('/api/redirecionamentos', async (req, res) => {
  try {
    const collection = db.collection('redirecionamentos');
    const result = await collection.insertOne(req.body);
    res.json({ id: result.insertedId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//redirecionamento por ID
// app.get('/api/redirecionamentos/:id', async (req, res) => {
//   try {
//     const collection = db.collection('redirecionamentos');

//     console.log('Trying to fetch redirection with ID:', req.params.id);

//     const redirecionamento = await collection.findOne({ _id: new ObjectId(req.params.id) });

//     console.log('Redirection fetched:', redirecionamento);

//     if (!redirecionamento) {
//       return res.status(404).json({ message: 'Nenhum redirecionamento encontrado com esse ID' });
//     }

//     res.json(redirecionamento);
//   } catch (err) {
//     console.error('Error fetching redirection by ID:', err);
//     res.status(500).json({ error: 'Erro ao buscar redirecionamento por ID' });
//   }
// });



//deletar um redirecionamento
app.delete('/api/redirecionamentos/:id', async (req, res) => {
  try {
    const collection = db.collection('redirecionamentos');
    console.log('ID requisitado:', req.params.id);
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    console.log("Resultado da deleção:", result);  // Log do resultado no console do servidor
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Nenhum redirecionamento encontrado com esse ID' });
    }
    res.json({ message: 'Redirecionamento deletado' });
  } catch (err) {
    console.error('Error deleting redirection:', err);  // Log do erro no console do servidor
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;

//  modularizar as rotas e criar um exe depois