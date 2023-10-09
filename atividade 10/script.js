function maior() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);

    if (num1 > num2 && num1 > num3)
        alert("Maior dos três números: " + num1);

    if (num2 > num1 && num2 > num3)
        alert("Maior dos três números: " + num2);

    if (num3 > num2 && num3 > num1)
        alert("Maior dos três números: " + num3);
}

function crescente() {
    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);
    let numero3 = Number(document.getElementById("num3").value);

    let menor = Math.min(numero1, numero2, numero3);
    let meio = (numero1 + numero2 + numero3) - menor - Math.max(numero1, numero2, numero3);
    let maior = Math.max(numero1, numero2, numero3);

    alert("Números ordenados em ordem crescente: " + menor + ", " + meio + ", " + maior);
}
