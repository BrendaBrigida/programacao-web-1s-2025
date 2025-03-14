let num_A = 2.47;
let num_B = 3.14;
let num_C;

const operacoes = ["adição", "subtração", "multiplicação", "divisão"];  //[1, 11, "111", true, null]array aceita todos os tipos de dados
//operacoes[2]

function imprimirResultado(operando1, operando2, resultado, operacao){
    console.log(`Resultado da ${operacao} entre ${operando1} e ${operando2} é ${resultado}`);
} 


num_C = num_A + num_B;
//imprimirResultado()(num_A, num_B, num_C, operacoes[0]);

num_C = num_A - num_B;
//imprimirResultado(num_A, num_B, num_C, operacoes[1]);

num_C = num_A * num_B;
//imprimirResultado(num_A, num_B, num_C, operacoes[2]);

num_C = num_A / num_B;
//imprimirResultado(num_A, num_B, num_C, operacoes[3]);


let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function imprimirMatriz(A){
    for(let i = 0; i < A.length; i++){     //length atributo do objeto
        let linhaMatriz = " ";
       for(let j = 0; j < A[i].length; j++){
            linhaMatriz += A[i][j] + "\t";
        }
        console.log(linhaMatriz);
    }
}

imprimirMatriz(matriz);

//console.log(matriz);

let capitais = {  //objeto usa chaves
    DF: "Brasília",
    DDD_DF: 61,
    SP: "São Paulo",
    DDD_SP: 11,
    RJ: "Rio de Janeiro",
    DDD_RJ: 21
};

console.log(capitais.DF + " - " + capitais.DDD_DF);

for(const key in capitais){ //percorre os atributos de um objeto
    console.log(key + "-" + capitais[key]);
}

function verificaNumeroPar(n){
    if(n % 2 == 0){
        return true;
    }
    return false;
}

console.log(verificaNumeroPar(3));
console.log(verificaNumeroPar(6));
