//ENCONTRANDO UM ELEMENTO
//TIPOS PRIMITVOS

//para encontrar um elemento dentro de uma array pode ser utilizar de varios metodos dois desse metodos são os metodos:
//nameArray.indexOf();  encontra um indice dentro de uma array e se verdadeiro retona o numero do indice que o valor esta e se falso retorna um -1
//nameArray.lastIndexOf(); se houver dois indices iguais ele analisa e retorna o ultimo indice a ser passado
//nameArray.includes(); analisa se a array tem o valor passado, se houver retorna true caso contrario retorna false

const onePiece = ['luffy','nami','zoro','robin','sanji','luffy'];
console.log(onePiece.indexOf('luffy'));
console.log(onePiece.lastIndexOf('luffy'));

console.log(onePiece.includes('ussop'));



//ENCONTRANDO UM ELEMENTO
//TIPOS DE REFERENCIA


//para encontrar uma refenrencia dentro de uma array eu preciso utilizar a função:
//nameArray.find(function(){
    
//}); essa função compara se existe tal elemento dentro da array, se houver retorna o a função criada e exibe o resultado caso contrario retorna undefined.

const ferramentas = [
    
    {id:1, name:'makita'},
    {id:2, name:'sthil'},
    {id:3, name:'bosch'},
    {id:4, name:'wonder'}
];

console.log(ferramentas);

const ferramenta = ferramentas.find(function(ferramenta){
    return ferramenta.name === 'makita';
});

console.log(ferramenta);


//ARROW FUNCTION
//=>


// a função arrow(=>) elimina a obrigatoriedade de se usar o elemento function(), o arrow é utilizado para abreviar um codigo.
// versao com function: 
// const bebida = bebidas.find(function(bebida){
//     return bebida.name === 'suco';
// });

// versao arrow function:
// const bebida = bebidas.find((bebida) => bebida.name === 'suco');


const bebidas = [
    {id:1 , name:'cerveja'},
    {id:2 , name:'água'},
    {id:3 , name:'refrigerante'},
    {id:4 , name:'suco'}
];

const bebida = bebidas.find((bebida) => bebida.name === 'suco');
console.log(bebida);
