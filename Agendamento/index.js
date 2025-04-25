const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("app rodando na porta " + PORT)
});