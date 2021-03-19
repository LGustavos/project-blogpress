const express = require('express');
const connection = require('./database/database');
const app = express();

connection.authenticate()
  .then(() => {
      console.log("Conexão feita com sucesso!");
  }).catch((error) => {
      console.log(error);
  });

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).render("index");
});



app.listen(4000, () => {
    console.log("Servidor rodando!")
});