class Retangulo {
    constructor(x, y) {
        this.base = x;
        this.altura = y;
    }

    calcularArea() {
        alert('Área do retângulo: ' + this.base * this.altura)
    }
}

let forma = new Retangulo(3, 2)


forma.calcularArea()

function Conta (){
    this.setNome = function(nome) {
        this.nome = nome
    }

    this.getNome = function() {
        return(this.nome)
    }

    this.setBanco = function(banco) {
        this.banco = banco
    }

    this.getBanco = function() {
        return(this.banco)
    }

    this.setConta = function(conta) {
        this.conta = conta
    }

    this.getConta = function() {
        return(this.conta)
    }

    this.setSaldo = function(saldo) {
        this.saldo = saldo
    }

    this.getSaldo = function() {
        return(this.saldo)
    }
}

function ContaCorrente (){
    this.setSaldoEspecial = function(saldoEspecial) {
        this.saldoEspecial = saldoEspecial
    }

    this.getSaldoEspecial = function() {
        return(this.saldoEspecial)
    }
}

function Poupanca (){
    this.setPoupancaComJuros = function(poupanca) {
        this.poupancaComJuros = poupanca
    }

    this.getPoupancaComJuros = function() {
        return(this.poupancaComJuros)
    }   
}

ContaCorrente.prototype = new Conta()
objCorrente = new ContaCorrente()

objCorrente.setNome('Luan vendt')
objCorrente.setBanco('Nubank')
objCorrente.setConta('123456')
objCorrente.setSaldo(1000)
objCorrente.setSaldoEspecial(1000)

alert(`Dados conta Corrente:
    Nome: ${objCorrente.getNome()},
    Banco: ${objCorrente.getBanco()},
    Conta: ${objCorrente.getConta()},
    Saldo: ${objCorrente.getSaldo()},
    SaldoEspecial: ${objCorrente.getSaldoEspecial()}`
)


Poupanca.prototype = new Conta()
objPoupanca = new Poupanca()


objPoupanca.setNome('Luan vendt')
objPoupanca.setBanco('Banco do Brasil')
objPoupanca.setConta('345678')
objPoupanca.setSaldo(1000)
objPoupanca.setPoupancaComJuros(10000)

alert(`Dados conta Poupanca:
    Nome: ${objPoupanca.getNome()},
    Banco: ${objPoupanca.getBanco()},
    Conta: ${objPoupanca.getConta()},
    Saldo: ${objPoupanca.getSaldo()},
    SaldoEspecial: ${objPoupanca.getPoupancaComJuros()}`
)

