const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3003;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/usuarios', (req, res) => {
  console.log(req.body);
  res.send('<h1>Parabéns. Usuário Incluido!</h1>');
});

app.post('/usuarios/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.send('<h1>Parabéns. Usuário Alterado!</h1>');
});

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}...`);
})