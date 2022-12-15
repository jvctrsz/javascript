//REMOVENDO ELEMENTOS ARRAY

const alfabeto = ['a','b','c','d','e','f'];

const primeiro = alfabeto.shift();
console.log(primeiro);
console.log(alfabeto);

const meio = alfabeto.splice(3,1)
console.log(meio);
console.log(alfabeto);

const ultimo = alfabeto.pop();
console.log(ultimo);
console.log(alfabeto);

// nameArray.shift(); deleta o primeiro indice da array
// nameArray.splice(); deleta o indice selecionado da array
// nameArray.pop(); deleta o ultimo indice da array



//ESVAZIANDO UM ARRAY


const numeros = [0,1,2,3,4,5];
const outros = numeros;

//solução 1  MAIS RECOMENDADO
numeros.length = 0;
console.log(numeros);
console.log(outros);

//solução 2
numeros.splice(0,numeros.length);
console.log(numeros);
console.log(outros);

//solução 3
while(numeros.length > 0)
    numeros.pop();
console.log(numeros);
console.log(outros);