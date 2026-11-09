//Importar a biblioteca json-server
const jsonServer = require('json-server');

//Importa o módulo express
const express = require('express');

//Criar uma instancia do servidor Express
const app = express();

//Criar um roteador com o arquivo db.json
const router = jsonServer.router('db.json');

//Importa os padrões JsonServer
const middlewares = jsonServer.defaults();

//Configura o servidor para usar
app.use(express.static('public'));

//Funções que são executadas em cada requisição
app.use(middlewares);

//Usa o roteador criado
app.use(router);

//Define a porta em que o servidor irá rodar
const porta = 3000;

//Defini a rota principal
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
})

//Inicia o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})