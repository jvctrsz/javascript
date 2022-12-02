const filme = {
    titulo: 'Shrek',
    ano: 2004,
    diretor: 'Jorge',
    personagem:'Fiona'
}

exibirPropiedades(filme);
function exibirPropiedades(obj) {
   for (prop in obj)
    if( typeof obj[prop] === 'string')
    console.log(prop,obj[prop])
}