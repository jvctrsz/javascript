function montEndereço(rua,cidade,CEP){
    return{
        rua,
        cidade,
        CEP
    }
}

    const endereço = montEndereço('Rua madalena santineli','Sinop','78553-292')

console.log(endereço);

// let endereço = {
//     rua: 'a',
//     cidade: 'b',
//     cep: 'c'
// }

// function exibirEndereço(endereço){
//     for(let chave in endereço)
//         console.log(chave,endereço[chave])
// }
// exibirEndereço(endereço);