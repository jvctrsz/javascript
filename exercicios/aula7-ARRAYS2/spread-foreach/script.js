//METODO SPREAD "..."

const primeiro = [1,2,3];
const segundo = [4,5,6];

const combinado = [...primeiro,'%',...segundo];
console.log(combinado);

//tambem é possivel clonar um objeto usando o "..."

const clonado = [...combinado];
console.log(clonado);

const numeros = [1855,1651,1455,2178,4586];
const maiorNumero = Math.max(...numeros);
console.log(maiorNumero);


//forEach

//o metodo forEach é usado para interar um Array.


const frutas = ['maça','banana','mamão','limão','abacate'];

for(fruta of frutas){
    console.log(fruta);
}

frutas.forEach((fruta,indice) => console.log(fruta,indice))


//COMBINANDO ARRAYS COM METODO JOIN AND SPLIT

//join
const idades = ['idades = ',18,20,17,19,16];

const dividoBarra = idades.join('/');
console.log(dividoBarra);

//split
const anuncio = 'sejam bem vindos a eliopolis';
const separar = anuncio.split(' ');
console.log(separar);

//joins 

const phrase = 'how can i use modulo operator in javascript';
const spacePhrase = phrase.split(' ');

const url = spacePhrase.join('-');
console.log(url);