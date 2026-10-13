const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send("Automação DevFlow Solutions funcionando com Node.js!");
});

// Só inicia o servidor se não estiver rodando um teste automatizado
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}

module.exports = app;
