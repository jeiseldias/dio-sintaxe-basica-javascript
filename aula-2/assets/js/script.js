// TIPOS PRIMITIVOS

// Boolean
var vOuF = false;
console.log(typeof(vOuF));

// Number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// String
var nome = 'Jeisel';
console.log(typeof(nome));

// Como declarar variável
/* 
    Principais características:
        - Pode ter seu valor alterado
        - Pode ser iniciada sem valor, assim assumirá o valor NULL
*/
var variavel = 'Jeisel'
variavel = 'Dias'
console.log(variavel)

let variavel2 = 'da'
variavel2 = 'Silva'
console.log(variavel2)

// Como declarar constante
/* 
    Principais características:
        - NÃO pode ter seu valor alterado
        - Dever ser iniciada com um valor, caso seja iniciada sem valor será gerado um erro
        - Tentar alterar o valor durante a execução do script irá gerar um erro
        - É uma boa prática nomear as constantes com LETRAS MAIÚSCULAS
*/
const CONSTANTE = 'Jeisel Dias da Silva'
console.log(CONSTANTE)

/*
    Escopo global quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código
    Escopo local quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não
*/
var escopoGlobal = 'global'
console.log(escopoGlobal)

function escopoLocal() {
    let local = "local"
    console.log(local)
}

escopoLocal()

/* 
    Atricuição utiliza o sinal =
    Comparação utiliza o sinal ==
    Comparação idêntica utiliza o sinal === (Compara não só os valores mas também o tipo)
*/

// Atribuição
var atribuicao = 'Jeisel'

// Comparação
var comparacao = '0' == 0; // retorna TRUE
console.log(comparacao)

// Comparação idêntica
var identica = '0' === 0; 
console.log(identica); //retorna FALSE pois os tipos são diferentes '0' é uma string e 0 é um number

/*
    OPERADORES ARITMÉTICOS:
        + adição
        - subtração
        * multiplicação
        / divisão real
        % divisão inteira - retorna o resto da divisão
        ** potenciação
*/

// Adição
var adicao = 1 + 1;
console.log(adicao)

// Subtração
var subtracao = 1 - 1;
console.log(subtracao)

// Multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao)

// Divisão real
var divisaoReal = 4 / 2;
console.log(divisaoReal)

// divisão inteira
var divisaoInteira = 4 % 2;
console.log(divisaoInteira)

// Potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao)

/*
    OPERADORES RELACIONAIS
        > maior que
        < menor que
        >= maior ou igual a
        <= menor ou igual a
*/

// Maior que
var maior = 5 > 2;
console.log(maior); //Retorna TRUE

// Menor que
var menor = 5 < 2;
console.log(menor); //Retorna FALSE

// >= Maior ou igual a
var maiorIgual = 5 >= 5;
console.log(maiorIgual); //Retorna TRUE

// <= Menor ou igual a
var menorIgual = 5 <= 2;
console.log(menorIgual); //Retorna FALSE

/*
    OPERADORES LÓGICOS
        && "e" considera que todos os valores da condição sejam TRUE
        || "ou" considera que UM valor seja TRUE
        ! "nao" nega um valor invertendo o mesmo (TRUE para FALSE ou FALSE para TRUE)
*/

// Operador E
var e = true && false;
console.log(e); // Retorna FALSE porque a condição "e" precisa que o primeiro valor E o segundo valor sejam TRUE

// Operador OU
var ou = true || false;
console.log(ou); // Retorna TRUE porque a condição "ou" precisa que o primeiro valor OU o segundo valor seja TRUE

// Operador NAO
var nao = !true;
console.log(nao); // Retorna FALSE porque negamos o valor TRUE transformando o mesmo em FALSE