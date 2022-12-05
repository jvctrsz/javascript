// If .. Else

// Se a hora estiver entre 06:00 até 12:00 : Bom dia!
// Se estiver entre 12:00 até 18:00 : Boa tarde!
// Caso contrário : Boa noite!

let hora = 6;

if (hora >= 6 && hora < 12) {
    console.log('Bom dia!')
}

else if (hora > 12 && hora <= 18) {
    console.log('Boa tarde!')
}

else {
    console.log('Boa noite!')
}

//SWitch .. Case


let permissao; //comum, gerente, diretor

permissao = '';

switch (permissao) {
    case 'comum':
    console.log('usuário comum');
    break

    case 'gerente':
    console.log('usuário gerente');
    break

    case 'diretor':
    console.log('usuário diretor');
    break

    default:
    console.log('usuário não reconhecido');
}

//Laço For / Loop for

// 1.For
// 2.While
// 3.Do..While
// 4.For..In
// 5.For..of

for(let i = 1; i <= 5; i++) {
    console.log('Estou aprendendo!', i)
}

for(let i = 1; i <= 5; i++) {
    if(i % 2 !== 0) { // ESTUDAR MODULUS
        console.log(i);
    }
}


//While loop

let i = 1;

while (i <= 5) {
    console.log('Estou aprendendo!', i)
    i++;
}

//Do.. While

let w = 0;

do {
    console.log('digitando!');
    w++;
} while ( w < 10)

//Loop For In

const pessoa = {
    nome: 'Jhonatan',
    idade: 25
};

// for(let chave in pessoa) {
//     console.log(chave,pessoa['nome']);
// }

const cores = ['Vermelho','Azul','Verde'];

// for(let indice in cores) {
//     console.log(indice,cores[indice])
// }

//For-of

for(let cor of cores){
    console.log(cor);
}

const nomes = ['Jhonatan','José','Jéssica','Jamilly']

for(let nome of nomes){
    console.log(nome);
}