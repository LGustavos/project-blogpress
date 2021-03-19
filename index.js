const express = require('express');
const connection = require('./database/database');
const categoriesController = require('./categories/categoriesController');
const Category = require('./categories/Category');
const articlesController = require('./articles/articlesController');
const Article = require('./articles/Article');
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

app.use('/', categoriesController);
app.use('/', articlesController);


app.listen(4000, () => {
    console.log("Servidor rodando!")
});