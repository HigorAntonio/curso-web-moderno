const express = require('express');
const bodyParser = require('body-parser');
const saudacao = require('./saudacaoMid');

const app = express();

app.use(bodyParser.json());
app.use(saudacao('Higor'));

app.use((req, res, next) => {
  console.log('Será que serei chamado?');
  next();
});

app.get('/', (req, res) => {
  // res.send('Estou bem!');
  
  // res.json({
    //   nome: 'iPad 32GB',
    //   price: 1899.00,
    //   discount: 0.12
    // });
    
  res.json([
    { id: 7, name: 'Ana', position: 1 },
    { id: 34, name: 'Bia', position: 2 },
    { id: 73, name: 'Carlos', position: 3 }
  ]);
});

app.get('/clientes/relatorio', (req, res)=> {
  res.send(`Cliente relatório completo = ${req.query.completo} ano = ${req.query.ano}`)
});

app.get('/clientes/:id', (req,res) => {
  res.send(`Cliente ${req.params.id} selecionado`)
});

app.post('/corpo',(req, res) => {
  // let corpo = '';
  // req.on('data', (parte) => {
  //   corpo += parte
  // });

  // req.on('end',() => {
  //   res.send(corpo);
  // });
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('Backend executando...');
});