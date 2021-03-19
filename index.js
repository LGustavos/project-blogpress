const express = require('express');
const bodyParser = require('body-parser');
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
app.use(express.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use('/', categoriesController);
app.use('/', articlesController);
app.use('/', (req, res) => {
    res.render('index')
});


app.listen(4000, () => {
    console.log("Servidor rodando!")
});