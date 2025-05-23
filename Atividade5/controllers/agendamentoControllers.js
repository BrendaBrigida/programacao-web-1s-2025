function getIndexView(req, res){
    res.render('index.html');
}

function postAgendarConsulta(req, res){
    let dados_consulta = req.body;
    let campos_invalidos = validarRequisicaoAgendamentoConsulta(dados_consulta);
    res.render('index.html', {campos_invalidos, dados_consulta});
}

module.exports = {
    getIndexView,
    postAgendarConsulta
}

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
