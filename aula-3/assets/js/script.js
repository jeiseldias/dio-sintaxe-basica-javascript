// Array é uma matriz de variáveis, onde cada variável possui um índice e os valores podem ser de vários tipos

let array = ['jeisel', 1, true];
console.log(array);

let array2 = ['jeisel', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array2);

// Para buscar uma determinada possição basta buscar pelo índice, neste caso 0 (zero)
console.log[0];

/*
    MANIPULANDO ARRAYS
        - forEach()
        - push()
        - pop()
        - unshift()
        - shift()
        - indexOf()
        - splice()
        - slice()
*/

// forEach() - executa uma função para cada item no array
console.log("---------- FOREACH ----------");
array.forEach(function (item, index) {
        console.log("Índice: ", index, " Valor: ", item);
    }
);

// push() - adiciona um item ao final do array
console.log("---------- PUSH ----------");
console.log(array);
array.push("Dias"); // Adiciona o item Dias no final do array
console.log(array);

// pop() - remove o último item do array
console.log("---------- POP ----------");
console.log(array);
array.pop(); // Remove o último item (Dias) do array
console.log(array);


// unshift() - adiciona um item no início do array
console.log("---------- UNSHIFT ----------");
console.log(array);
array.unshift("Dias"); // Adiciona o item Dias no início do array
console.log(array);

// shift() - remove o primeiro item do array
console.log("---------- SHIFT ----------");
console.log(array);
array.shift(); // Remove o primeiro item (Dias) do array
console.log(array);

// indexOf() - faz uma busca no array e retorna o índice onde o valor foi encontrado
console.log("---------- INDEXOF ----------");
let indice = array.indexOf(true) // Procura o valor true nos elementos do array
console.log(indice) // Retorna o índice 2 (posicao onde está o true)

// splice() - remove ou substitui um item pelo índice
console.log("---------- SPLICE ----------");
console.log(array);
let splice = array.splice(0,2); // 0 (zero) é o indice onde o splice irá iniciar e 2 (dois) a quantidade de items que ele irá recuperar
console.log(splice);

// slice()  - "fatia" um array, retornando uma parte do original
console.log("---------- SLICE ----------");
console.log(array2);
let novoArray = array2.slice(0,3); // 0 (zero) é o indice onde o splice irá iniciar e 2 (dois) a quantidade de items que ele irá remover
console.log(novoArray);

/* 
    Dados que possuem propriedades e valore que definem suas características
        - Deve ser declarado entre chaves {}
*/
let objeto = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ['array'],
    objetoInterno: {
        parametro: "parametro do objeto interno",
    }
}

console.log("---------- OBJETO ----------");
console.log(objeto);

// Desestruturando (recuperando) uma determinada propriedade de um objeto, neste caso a propriedade string
console.log("---------- DESESTRUTURANDO (STRING) ----------");
let string = objeto.string;
console.log(string);

// Desestruturando (recuperando) uma determinada propriedade de um objeto, neste caso a propriedade objetoInterno
console.log("---------- DESESTRUTURANDO (OBJETOINTERNO) ----------");
let objetoInterno = objeto.objetoInterno;
console.log(objetoInterno)

// Desestruturando (recuperando) uma determinada propriedade de um objeto, neste caso as propriedades boolean e number
console.log("---------- DESESTRUTURANDO (BOOLEAN E NUMBER) ----------");
let { boolean, number } = objeto;
console.log(boolean, number);