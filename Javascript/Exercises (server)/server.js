const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve arquivos estáticos da pasta 'public' (HTML, CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal de fallback caso não exista index.html
app.get('/', (req, res) => {
  res.send('<h1>Servidor Node.js rodando no Android!</h1>');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
