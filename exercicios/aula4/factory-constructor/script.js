
//             AULA DE FACTORY FUNCTIONS
// camelCase

function meuCarro(marcaCarro,motorCarro,combustivelCarro,anoCarro){
    return{
        marcaCarro,
        motorCarro,
        combustivelCarro,
        anoCarro,
        Partida(){
            console.log('Dando partida!!');
        }
    }
}

const primeiroCarro = meuCarro('Volkswagen',2.0,'Flex',2016);
console.log(primeiroCarro);

//              FIM AULA FACTORY FUNCTIONS


//              AULA DE CONSTRUCTOR FUNCTION
// PascalCase

function Computador(processador,placaVideo,monitor,memoriaRam){
    this.processador = processador,
    this.placaVideo = placaVideo,
    this.monitor = monitor,
    this.memoriaRam = memoriaRam,
    this.montarPc = function(){
        console.log('Seu pc está montado.');
    }
}

const computador = new Computador('I5','RTX3090','LG25pl UltraWide','8GB')
    console.log(computador);
