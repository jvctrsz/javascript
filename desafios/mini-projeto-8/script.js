// const array = [90,90,95];

// let soma = array.reduce(function(soma, i) {
//     return soma + i;
// })

// let arrayI = 3

// let div = soma / 3;

// if (div > 0 && div <= 59) {
//     console.log('F')
// }

// else if (div >= 60 && div <= 69){
//     console.log('D')
// }

// else if (div >= 70 && div <= 79) {
//     console.log('C')
// }

// else if (div >= 80 && div <= 89) {
//     console.log('B')
// }

// else if (div >= 90 && div <= 99) {
//     console.log('A')
// }


const array = [70,70,80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A'
}

function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma/(array.length);
}