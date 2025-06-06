const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

const agendamentoRouter = require('./routers/agendamentoRouter');
app.use('/', agendamentoRouter);

//data
const data = new Date()

const dia = String(data.getDate()).padStart(2, '0') //1 -> 01
const mes = String(data.getMonth() + 1).padStart(2, '0')
const ano = data.getFullYear()

const dataAtual = `${dia}/${mes}/${ano}`

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT)
});
