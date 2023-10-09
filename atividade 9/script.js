let pessoas = [] 

let i = 0

let maiorIdade = 0
let menorIdade = 999
let pessimos = 0
let otimos = 0
let bons = 0
let homens = 0
let mulheres = 0

function respostas() {
    if (i < 45) { 
        let pessoa = {} 
        pessoa.idade = parseInt(document.getElementById("idade").value)
        pessoa.sexo = document.getElementById("sexo").value
        pessoa.opiniao = parseInt(document.getElementById("opiniao").value)

        pessoas.push(pessoa) 

        i++

        alert('Resposta registrada (' + i + '/45)'); 
    } else {
        alert('Já foram registradas respostas de quarenta e cinco pessoas.');
    }
}

function receberRespostas() {
    i = 0
    let mediaIdade = 0 

    while (i < pessoas.length) {
        mediaIdade += pessoas[i].idade 

        if (pessoas[i].idade > maiorIdade)
            maiorIdade = pessoas[i].idade

        if (pessoas[i].idade < menorIdade) 
            menorIdade = pessoas[i].idade

        if (pessoas[i].opiniao === 1)
            pessimos++

        if (pessoas[i].opiniao === 4)
            otimos++

        if (pessoas[i].opiniao === 3)
            bons++

        if (pessoas[i].sexo === "M")
            homens++

        if (pessoas[i].sexo === "F")
            mulheres++

        i++
    }

    mediaIdade = (mediaIdade / pessoas.length).toFixed(2)

    otimos = ((otimos / pessoas.length) * 100).toFixed(2)

    bons = ((bons / pessoas.length) * 100).toFixed(2)

    alert("Média de idade das pessoas que responderam: " + mediaIdade)

    alert("Porcentagem de pessoas que responderam 'ótimo': " + otimos + "%")
    alert("Porcentagem de pessoas que responderam 'bom': " + bons + "%")

    alert("Número de mulheres que responderam a pesquisa: " + mulheres)
    alert("Número de homens que responderam a pesquisa: " + homens)
}

function limpar () {
    document.getElementById("idade").value = ""
    document.getElementById("sexo").value = ""
    document.getElementById("opiniao").value = ""
}
