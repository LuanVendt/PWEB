function calcular() {
    let num1 = Number(document.getElementById('numero1').value)
    let num2 = Number(document.getElementById('numero2').value)

    let soma = num1 + num2

    let diferenca = num1 - num2

    let produto = num1 * num2

    let divisao = num1 / num2

    let resto = num1 % num2

    alert(`Soma = ${soma} \nDiferença = ${diferenca} \nProduto = ${produto} \nDivisão = ${divisao} \nResto = ${resto}`)
}