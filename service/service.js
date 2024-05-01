// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Configuração do multer para uploads de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Pasta onde os arquivos serão salvos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Adiciona um sufixo único ao nome do arquivo
  },
});

const upload = multer({ storage });

app.post('/coordenadores', upload.single('fotoPerfil'), (req, res) => {
  const { nome, email, senha } = req.body;
  const fotoPerfil = req.file ? req.file.path : null; // Caminho do arquivo de foto de perfil, se existir

  // Aqui você pode salvar os dados do coordenador no banco de dados
  // Por exemplo: coordenadores.push({ nome, email, senha, fotoPerfil });

  res.status(201).json({ nome, email, senha, fotoPerfil });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
