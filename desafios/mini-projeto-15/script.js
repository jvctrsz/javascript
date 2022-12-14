let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 até R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 99999}
];

function criarFaixasPreço(tooltip,minimo,maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixasPreço('até R$700',0,700),
    criarFaixasPreço('de R$700 até R$1000',700,1000),
    criarFaixasPreço('R$1000 ou mais',1000,100000)
];

console.log(faixas);
console.log(faixas2);
