const AgendamentoConsulta = require('../models/agendamentoConsultaModel'); //importa o modelo agendamento para poder manipular os dados da tabela no bd

//redenriza a pagina inicial
function getIndexView(req, res){
    res.render('index.html');
}
// Função que busca todos os agendamentos no banco e renderiza a página agendamentos.html, passando os dados para a view
function getAgendamentosView(req, res){
    AgendamentoConsulta.findAll().then((agendamentos)=>{
        res.render('agendamentos.html', {agendamentos});
    });
}
//valida os dados do formulario e salva no bd
function postAgendarConsulta(req, res){
    let dados_consulta = req.body; //pega os dados e envia no formulario
    let campos_invalidos = validarRequisicaoAgendamentoConsulta(dados_consulta);

    //Se não houver campos inválidos, cria o registro no banco e redireciona para página
    if(campos_invalidos.length == 0){
        AgendamentoConsulta.create(dados_consulta).then(()=>{
            res.redirect('/agendamentos');
        });
    }
    else{
        //Se tiver campos inválidos, renderiza a página inicial com os erros e dados preenchidos para o usuário corrigir
        res.render('index.html', {campos_invalidos, dados_consulta});
    }

}
//Exporta as funções para poder usar em outras partes da aplicação
module.exports = {
    getIndexView,
    postAgendarConsulta,
    getAgendamentosView
}
// Função que valida os dados recebidos do formulário de agendamento
// Retorna uma lista dos campos que estão vazios ou inválidos
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

    // Validação de data da consulta:
    if (dados_consulta.data_consulta) {
        const hoje = new Date(); // data atual
        const dataConsulta = new Date(dados_consulta.data_consulta);

        // Zera as horas para comparar só a data
        hoje.setHours(0, 0, 0, 0);
        dataConsulta.setHours(0, 0, 0, 0);

        if (dataConsulta <= hoje) {
            campos_invalidos.push("Data da consulta (somente agendamentos futuros serão aceitos)");
        }
    } else {
        campos_invalidos.push("Data da consulta");
    }


    return campos_invalidos; // retorna os campos que precisam ser preenchidos
}