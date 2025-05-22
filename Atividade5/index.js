const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=>{
    res.render('index.html', { });
});

//data
const data = new Date()

const dia = String(data.getDate()).padStart(2, '0') //1 -> 01
const mes = String(data.getMonth() + 1).padStart(2, '0')
const ano = data.getFullYear()

const dataAtual = `${dia}/${mes}/${ano}`


app.post('/agendar_consulta',(req, res)=> {
    let dados_consulta = req.body;
    let campos_invalidos = validarRequisicaoAgendamentoConsulta(dados_consulta);

    let  form_invalido = campos_invalidos.length > 0;

    res.render('index.html', {campos_invalidos, dados_consulta});
})


function validarRequisicaoAgendamentoConsulta(dados_consulta){
    let campos_invalidos = [];

    if(dados_consulta.nome.length == 0){
        form_invalido = true;
        campos_invalidos.push("Nome");
    }
    if(dados_consulta.sobrenome.length == 0){
        form_invalido = true;
        campos_invalidos.push("Sobrenome");
    }
    if(dados_consulta.cpf.length == 0){
        form_invalido = true;
        campos_invalidos.push("CPF");
    }
    if(dados_consulta.data_nascimento.length == 0){
        form_invalido = true;
        campos_invalidos.push("Data de nascimento");
    }
    if(dados_consulta.telefone.length == 0){
        form_invalido = true;
        campos_invalidos.push("Telefone");
    }
    if(dados_consulta.cep.length == 0){
        form_invalido = true;
        campos_invalidos.push("CEP");
    }
    if(dados_consulta.endereco.length == 0){
        form_invalido = true;
        campos_invalidos.push("Endereço");
    }
    if(dados_consulta.clinica.length == 0){
        form_invalido = true;
        campos_invalidos.push("Clinica");
    }
    if(dados_consulta.especialidade.length == 0){
        form_invalido = true;
        campos_invalidos.push("Especialidade");
    }

    return campos_invalidos;

}

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("app rodando na porta " + PORT)
});
