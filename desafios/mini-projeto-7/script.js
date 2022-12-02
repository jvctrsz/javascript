// 1 - os multiplos de  5 e 3
// 2 - somar os multiplos e exibir o resultado total
// 3 - somento os numeros multiplos de 3 e 5 dentro de o numero total(10)
// 4 - exibir a soma dos multiplos 
// 5 - armazenar os multiplos de 3
//     armazenar os multiplos de 5 
//     somar os dois

    somar(10);

    function somar(limite) {
        let multi3 = 0;
        let multi5 = 0;
        for(i = 0; i <= limite; i++){
            if (i % 3 === 0)
            multi3 += i;
            if(i % 5 ===0)
            multi5 += i;
        }
    console.log(multi3 + multi5);
    }
      