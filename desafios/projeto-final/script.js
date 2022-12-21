function validarEntrada(){
    NomeConvidado = document.getElementById('iconvidado').value;
    ConvidadosCristian = ['amanda','jessica','samara']
    if (ConvidadosCristian.includes(NomeConvidado)) {
        document.getElementById('permissao').innerText = 'Você pode entrar!'
    } else {
        document.getElementById('permissao').innerText = 'Você não pode entrar!'
    }
}
