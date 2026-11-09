
function enviarDados() {

    var nome = document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    var idade = document.getElementById('idade').value
    var cpf = document.getElementById('cpf').value
    var rg = document.getElementById('rg').value
    var rua = document.getElementById('rua').value
    var nCasa = document.getElementById('nCasa').value
    var cep = document.getElementById('cep').value
    var cidade = document.getElementById('cidade').value
    var bairro = document.getElementById('bairro').value
    var estado = document.getElementById('estado').value
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    var telefone = document.getElementById('telefone').value

    fetch('http://localhost:3000/pessoas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            sobrenome: sobrenome,
            idade: idade,
            cpf: cpf,
            rg: rg,
            rua: rua,
            nCasa: nCasa,
            cep: cep,
            cidade: cidade,
            bairro: bairro,
            estado: estado,
            email: email,
            senha: senha,
            telefone: telefone
        })
    })
    .then(resposta => resposta.json())
    .then(dados => {
        alert('Cadastro realizado com sucesso!')
        window.location.href = 'index.html'
    })
}
