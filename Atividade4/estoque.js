let itens = [];

function adicionar(item){
    let item_valido = validar_item_a_cadastrar(item);
    
    if(item_valido){
        itens.push(item);
    }

    return item_valido;
}

function listar(){
    return itens;
}

function editar(id, qtd){
    if(
        !is_numerico(id) || 
        !is_id_cadastrado(id) ||
        !is_numerico(qtd) ||
        qtd < 0
    ){
        return false;
    }
    itens.forEach(item_cadastrado => {
        if(item_cadastrado.id == id){
            item_cadastrado.qtd = qtd;
        }
    });
    return true;
}

module.exports = {
    adicionar,
    listar,
    editar
}

function is_numerico(n){
    if(isNaN(n) || n == null){
        return false;
    }
    return true;
}

function is_id_cadastrado(id){
    let item_existente = false;
    itens.forEach(item_cadastrado => {
        if(id == item_cadastrado.id){
            item_existente = true;
        }
    });
    return item_existente;
}

function validar_item_a_cadastrar(item){
    let item_valido = true;
    if(!is_numerico(item.id) || item.id <= 0){
        item_valido = false;
    }

    if(is_id_cadastrado(item.id)){
        item_valido = false; 
    }

    if(item.nome.length == 0){
        item_valido = false; 
    }

    if(!is_numerico(item.qtd) || item.qtd < 0){
        item_valido = false;
    }
    return item_valido;
}