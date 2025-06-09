const  AgendamentoConsulta = require('../models/agendamentoConsultaModel');

function getIndexView(req, res){
    res.render('index.html');
}

function getAgendamentosView(req, res){
    AgendamentoConsulta.findAll().then((agendamentos)=>{
        res.render('agendamentos.html', {agendamentos});
    });
}

module.exports = {
    getIndexView,
    postAgendarConsulta,
    getAgendamentoView
}


function postAgendarConsulta(req, res){
    let dados_consulta = req.body;
    let erro_form = false;
    let campos_invalidos = validar_dados_consulta(dados_consulta);

    if(campos_invalidos.length == 0){
        AgendamentoConsulta.creat(dados_consulta).then(()=>{
            res.redirect('/agendamentos');
        });
    }
    else{
        res.render('index.html', {erro_form, campos_invalidos, dados_consulta});
    }
    
}


function validarRequisicaoAgendamentoConsulta(req, res){
    let campos_invalidos = [];

    if(dados_consulta.nome.length == 0){
        erro_form = true;
        campos_invalidos.push("Nome");
    }
    if(dados_consulta.nome.length == 0){
        erro_form = true;
        campos_invalidos.push("Sobrenome");
    }
    if(dados_consulta.nome.length == 0){
        erro_form = true;
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


    res.render('index.html', {erro_form, campos_invalidos});

}
