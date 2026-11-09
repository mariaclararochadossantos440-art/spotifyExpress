
fetch('http://localhost:3000/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {

        var tabelaCorpo = document.getElementById('tabela-corpo')

        dados.forEach(objeto => {
            var tr = document.createElement('tr')

            var tdNome = document.createElement('td')
            var tdSobrenome = document.createElement('td')
            var tdCPF = document.createElement('td')
            var tdEmail = document.createElement('td')
            var tdRua = document.createElement('td')
            var tdCEP = document.createElement('td')
            var tdCidade = document.createElement('td')
            var tdEstado = document.createElement('td')
            var tdTelefone = document.createElement('td')

            tdNome.innerText = objeto.nome
            tdSobrenome.innerText = objeto.sobrenome
            tdCPF.innerText = objeto.cpf
            tdEmail.innerText = objeto.email
            tdRua.innerText = objeto.rua
            tdCEP.innerText = objeto.cep
            tdCidade.innerText = objeto.cidade
            tdEstado.innerText = objeto.estado
            tdTelefone.innerText = objeto.telefone

            tr.appendChild(tdNome)
            tr.appendChild(tdSobrenome)
            tr.appendChild(tdCPF)
            tr.appendChild(tdEmail)
            tr.appendChild(tdRua)
            tr.appendChild(tdCEP)
            tr.appendChild(tdCidade)
            tr.appendChild(tdEstado)
            tr.appendChild(tdTelefone)

            tabelaCorpo.appendChild(tr)
        })
    })
