// function Postagem(titulo,mensagem,autor,visualizacoes,comentarios,estaAoVivo){
//     this.titulo = titulo,
//     this.mensagem = mensagem,
//     this.autor = autor,
//     this.visualizacoes = visualizacoes,
//     this.comentarios = comentarios,
//     this.estaAoVivo = function() {
      
//     }
// }

// const array = [{
//     mensagem: 'a',
//     autor:'b'
// }]

// const post = new Postagem('carros','filme de carros','zezin','150mil visualizações',...array,)
//  console.log(post);


 function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [{mensagem: 'a', autor:'b'}],
    this.estaAoVivo = false
}

const post = new Postagem('carros','filme de carros','zezin')
 console.log(post)