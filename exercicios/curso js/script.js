// -------Variaves-------


let nome = 'Henrique';  //string literal (conjunto de letras)
console.log(nome);

let altura = '1.80m';   //number literal (conjunto de numeros)
console.log(altura);

let idade = 18;         //number literal (conjunto de numeros)
console.log(idade);

let estaAprovado = true; //boolean (Regras)

let sobrenome ;         //undefined 

let corSelecionada = null; //Redefinir um valor


//---------OBJETOS----------

let pessoa = {
    nome: 'Henrique',
    altura: '1.80m',
    idade: 18,
    estaAprovado: true,
    sobrenome: 'Silva',
    cor: 'Pardo',
    cidadania: 'Brasileiro',
    estadoCivil: 'Solteiro'
};

console.log(pessoa)

//----------ARRAYS----------

let familia = [26,45,50,17];
console.log(familia.length);
console.log(familia[2])


let nomeDoColega = ['Weberson',18,'Sinop','Programador']
console.log(nomeDoColega[0])


//---------FUNCTION------------

let corSite = 'Azul';

// ()são os parametros de uma função

let meuCarro = 'Jetta';

function marcaCarro(model,name,ano){
    meuCarro = model + ' ' + name + ' ' + ano;
};

console.log(meuCarro);
marcaCarro("Bmw","M5","2021");
console.log(meuCarro);

 //---------TIPOS-DE-FUNÇÂO----------

 //realiza uma tarefa e  não retorna nada

 function dizerNome(){
    console.log('Jhonatan')
 };

 dizerNome();

 //faz um calculo ou operação e retorna algo

 function MultiplicarPorDois(valor){
    return valor* 2;
 }

 let resultado = MultiplicarPorDois(225);
 console.log(resultado);