
function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima) 
        console.log('Sua velocidade está ok')
    else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
        if ( pontos >= 12)
        console.log('Carteira suspensa');
        else 
            console.log('Pontos',pontos);
    }
    
}
verificarVelocidade(130)
