const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.post('/login', (req, res) => {
    const { nome, email, password } = req.body;

  console.log(req.body)
  res.json({ message: 'Dados recebidos com sucesso!' });
});

app.listen(8000, () => {
    console.log('Servidor Express em execução.');
  });