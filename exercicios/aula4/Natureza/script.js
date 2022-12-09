//      Objetos dinamicos com javascript

const computador = {
    processador: 'Intel I5',
    placaVideo: 'NVIDIA RTX3090'
}

//É possivel adicionar e deletar variaveis em um objeto em javascript

computador.memoriaRam = 'HyperX 8GB';
computador.fonte = '60W';

delete computador.memoriaRam;
delete computador.placaVideo;

console.log(computador);



//      Clonando objetos

//crio um objeto para armazenar algumas informaçoes sobre ele

const celular = {
    marcaCelular : 'Xiaomi',
    tamanhoTela : 5.9,
    redesMoveis : '5G'
}

// para clonar eu uso a propiedade Object.assign({
//     aqui posso declarar mais variaveis para este objeto clonado
// },"nome da variavel(objeto)"), e armazeno tudo isso dentro de uma variavel "const name = Object.assign({},nameobject);"

const xiaomi = Object.assign({
    bateria: 5000,
    qualidadeTela: 'FullHD'
},celular);

console.log(xiaomi);


//Math 

// Math é um recurso do javascript para usar no seu codigo ex:
// Math.ramdom - vai te entregar um numero aleatorio entre os números que você deseja!

let array = [4481,18715,17156,14851];

let max = Math.max(...array);
console.log(max)
