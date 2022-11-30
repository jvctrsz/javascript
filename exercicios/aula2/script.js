//-------OPERADORES---------

//Operadores Aritiméticos
//Operadores Atribuição
//Operadores de Comparação
//Operadores Lógicos
//Operadores Bitwise


//-----OPERADORES-ARITIMÉTICOS-----

// + , - , * , / , **


let salario = 100;

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

// ++ --

let idade = 10;

console.log(++idade);

let altura = 10;

console.log(--altura);



//-------OPERADORES-DE-ATRIBUIÇÂO---------

let valorTecladoGamer = 100;
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;

valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);



//-------OPERADOR-DE-IGUALDADE---------

//igualdade estrita

console.log(1 === 1);
console.log('1' === 1);

//  === compara o tipo e a igualdade (tipo=String, number e etc)

//igualdade solta

console.log(1 == 1);
console.log('1' == 1);

// == compara somente a igualdade dos números

//--------OPERADOR-TERNÁRIO---------

let pontos = 100;
let tipo = pontos >= 100 ? 'premium' : 'comum';
console.log(tipo);


//--------OPERADORES-LOGICOS---------

// Operador Lógico e (&&)
// retorna True se os dois operandos forem true

console.log(true && true);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log('pode aplicar: ',podeAplicar);


// Operador Lógico ou (||)
// retorna True se um dos operandos seja true

console.log(false || true);


//Operador NOT (!)

let candiatoRecusado = !podeAplicar;
console.log('candidato recusado: ',candiatoRecusado);
