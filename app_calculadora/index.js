const express = require('express');
const calc = require('./calculadora'); 

const app = express();

app.get('/', (req, res)=>{
    res.send('Olá, mundo!');
});

app.get('/ola/:nome', (req, res)=>{
    res.send(`Olá, ${req.params.nome}!`);

});


const PORT = 8080; 
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});



//console.log(calc.somar(2, 3));
//console.log(calc.subtrair(2, 3));
//console.log(calc.multiplicar(2, 3));
//console.log(calc.dividir(2, 3));
