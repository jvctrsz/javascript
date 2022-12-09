//RESUMÃO


//FACTORY FUNCTION

function meuCarro(marcaCarro,motorCarro,combustivelCarro){
    return{
        marcaCarro,
        motorCarro,
        combustivelCarro,
        partida(){
            console.log('Seu carro está funcionando!');
        }
    }
}

const carro1 = meuCarro('Volkswagen','2.0','Flex');
console.log(carro1);

//CONSTRUCTION FUNCTION

function MeuComputador(processador,memoriaRam,placaVideo){
    this.processador = processador,
    this.memoriaRam = memoriaRam,
    this.placaVideo = placaVideo,
    this.ligar = function(){
        console.log('Seu computador está funcionado!')
    }
}

const computador = new MeuComputador('I5','8GB','RTX3090');
console.log(computador);

//Objetos dinamicos

const celular = {
    qualidadeTela: 'FullHD',
    marca: 'xiaomi',
    processador: 'snapdragon'
}

celular.bateria = 5000;
celular.tamanhoTela = 5.5;

delete celular.marca;
delete celular.bateria;

console.log(celular);

//Clonagem de Objetos/Functions...

const compraMoveis = {
    cozinha: 'Micro-ondas',
    sala: 'Sofá Novo',
    área: 'Churrasqueira'
} 

const listaCompras = Object.assign({
    quarto: 'Tv 75PL'
},compraMoveis);
console.log(listaCompras);

//TAMBEM HÁ A POSSIBLIDADE DE CLONAR USANDO 

const listaCompras2 = {...compraMoveis};
console.log(listaCompras2);

//MATH.

let array = [14562,25425,12542,51452,54251];
let max = Math.max(...array);
console.log(max);