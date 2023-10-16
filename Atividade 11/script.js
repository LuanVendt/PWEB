let aluno1 = {
    RA: '0030482211009',
    Nome: "Luan Vendt",
}
alert(`RA: ${aluno1.RA}, Nome: ${aluno1.Nome}`)

let aluno2 = {}
    aluno2.RA = '0030482211026',
    aluno2.Nome = 'Lucas Tokunaga'

alert(`RA: ${aluno2.RA}, Nome: ${aluno2.Nome}`)


let aluno3 = new Object()

aluno3.RA = '0030482211002'
aluno3.Nome = 'Bianca Melaré'

alert(`RA: ${aluno3.RA}, Nome: ${aluno3.Nome}`)


function Aluno(ra, nome) {
    this.ra = ra
    this.nome = nome

    this.MostraDados = function () {
        return `RA: ${this.ra}, Nome: ${this.nome}`
    }
}

let aluno4 = new Aluno('0030482211027', 'Pedro Ramal')

alert(aluno4.MostraDados())


let aluno5 = {}
let nome_propriedade = 'ra'
aluno5[nome_propriedade] = '00304822110123'
aluno5['nome'] = 'Jeniffer'
alert(`RA: ${aluno5.ra}, Nome: ${aluno5.nome}`)