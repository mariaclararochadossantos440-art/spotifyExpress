function fazerLogin() {

    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value

    fetch('http://localhost:3000/pessoas', {
        method: 'GET'
    })
    .then(resposta => resposta.json())
    .then(dados => {

        const pessoa = dados.find(pessoa => pessoa.email === email && pessoa.senha === senha)

        if (pessoa) {
            window.location.href = 'bemvindo.html'
        } else {
            alert('E-mail ou senha incorretos!')
        }

    })
}