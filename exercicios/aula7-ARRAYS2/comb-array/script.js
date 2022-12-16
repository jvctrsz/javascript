//COMBINAR UM ARRAY

//para combinar dois arrays utliza-se o metodo nameArray.concat(name2Array).

const primeiro = [1,2,3];
const segundo = [4,5,6];

const combinado = primeiro.concat(segundo);
console.log(combinado);

//DIVIDIR ARRAY

//para dividir dois arrays utliza-se o metodo nameArray.slice().

const cortado = combinado.slice(2);
console.log(cortado);


//EXERCICIO

const pecasMotor = ['vela','valvula','pistao'];
const pecasInterior = ['painel','volante','pedais'];

const carroPecas = pecasMotor.concat(pecasInterior);
console.log(carroPecas);

alert('Já possuo vela e valvula!');

const newCarroPecas = carroPecas.slice(2);
console.log(newCarroPecas);

