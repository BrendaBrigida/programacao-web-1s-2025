const express = require('express'); //Importa o framework Express, que será usado para criar o servidor
const mustacheExpress = require('mustache-express'); //Importa o motor de template Mustache para renderizar HTML com dados dinâmicos
const session = require('express-session');
const db = require('./db'); //Importa o arquivo de conexão com o bd
const app = express(); //Cria uma instância do aplicativo Express

app.engine('html', mustacheExpress()); //Define que arquivos com extensão .html serão renderizados usando o Mustache
app.set('view engine', 'html'); //Define que o motor de views será o Mustache
app.set('views', __dirname + '/views'); //Define o diretório onde estão os arquivos de visualização
app.use(express.urlencoded({extended: true})); //Permite que o Express interprete os dados enviados via formulário (req.body)

app.use(session({
    secret: 'secret=token',
    name: 'sessionId',
    resave: false,
    saveUninitialized: false
}));

const agendamentoRouter = require('./routers/agendamentoRouter'); //Importa as rotas de agendamento definidas
const usuarioRouter = require ('./routers/usuarioRouter');
app.use('/', agendamentoRouter); //Usa as rotas importadas
app.use('/', usuarioRouter);

db.sync(); //Cria as tabelas no banco, se ainda não existirem, com base nos modelos definidos

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT)
});