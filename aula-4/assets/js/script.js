var jogador1 = 0;
var jogador2 = 0;
var placar;

/* 
    ESTRUTURA BÁSICA IF/ELSE
*/
console.log("--------------- IF BÁSICO ---------------");

if(jogador1>0) {
    console.log("jogador 1 marcou ponto");
    placar = jogador1 > jogador2;
} else if (jogador2>0) {
    console.log("jogador 2 marcou ponto");
    placar = jogador2 > jogador1;
} else {
    console.log("ninguém marcou");
}

/* 
    ANINHAMENTO DE IF
        - Acontece quando temos um IF dentro de outro
*/
console.log("--------------- ANINHAMENTO DE IF ---------------");

if (jogador1 != -1) {
    if(jogador1>0) {
        console.log("jogador 1 marcou ponto");
    } else if (jogador2>0) {
        console.log("jogador 2 marcou ponto");
    } else {
        console.log("ninguém marcou");
    }   
}

/* 
    IF TERNÁRIO
        - Um IF em uma única linha
        <condicao> ? <verdadeiro> : <falso>;
*/
console.log("--------------- IF TERNÁRIO ---------------");
jogador1 != -1 && jogador2 != -1 ? console.log('Jogadores válidos') : console.log('Jogadores inválidos');

/* 
    SWITCH
        - Uma estrutura condicional que determina as instruções caso (case) uma condição seja satisfeita
        - Default é executado caso nenhuma das condições anteriores a ele seja satisfeita
        switch(<variavel>) {
            case <condicao da variavel>:
                <instrucao>
                break;
            default:
                <instrucao>
                break;
        }
*/
console.log("--------------- SWITCH ---------------");
switch(placar) {
    case placar = jogador1 > jogador2:
        console.log("jogador 1 ganhou");
        break;
    case placar = jogador2 > jogador1:
        console.log("jogador 2 ganhou");
        break
    default:
        console.log("ninguem venceu");
}

/* 
    ESTRUTURAS DE REPETIÇÃO
        - for
        - for/in
        -for/of
        - while 
        - do/while
*/

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let objeto = {
    propriedade1: 'prop1',
    propriedade2: 'prop2',
    propriedade3: 'prop3',
}

// FOR - executa uma instrução até que ela seja falsa
console.log("--------------- FOR ---------------");
for (let indice = 0; indice < array.length; indice++) {
    console.log(array[indice]);
}

// FOR/IN - executa repetição a partir de uma propriedade
console.log("--------------- FOR/IN (array) ---------------");
for(let i in array) {
    console.log(i);
}

console.log("--------------- FOR/IN (objeto) ---------------");
for(i in objeto) {
    console.log(i);
}

// FOR/OF - executa repetição a partir de um valor
console.log("--------------- FOR/OF ---------------");
for(let i of array) {
    console.log(i);
}

// WHILE - executa um bloco de instruções enquanto uma condição for verdadeira.
//       - a verificação da condição é feita antes da execução
console.log("--------------- WHILE ---------------");
var a = 0;
while(a<10){
    console.log(a);
    a++;
}

// DO/WHILE - executa um bloco de instruções enquanto uma condição for verdadeira.
//          - a verificação da condição é feita depois da execução
console.log("--------------- DO/WHILE ---------------");
var b = 0;
do {
    console.log(b);
    b++;
}while(b<10)
