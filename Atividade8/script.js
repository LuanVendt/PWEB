var escolhaComputador = Math.random() * 3

console.log(escolhaComputador)

if (escolhaComputador <= 1){
    escolhaComputador = 'pedra';
} else if (escolhaComputador > 1 && escolhaComputador <= 2){
    escolhaComputador = 'papel'
} else if (escolhaComputador > 2 && escolhaComputador <= 3){
    escolhaComputador = 'tesoura'
}

console.log(escolhaComputador)

 function jogo() {
    var escolhaUsuario = document.getElementById('input').value

    
    if (escolhaComputador == 'pedra' && escolhaUsuario == 'pedra'){
        alert('Empate!')
    } else if (escolhaComputador == 'pedra' && escolhaUsuario == 'papel'){
        alert('Você venceu!')
    } else if (escolhaComputador == 'pedra' && escolhaUsuario == 'tesoura'){
        alert('Você perdeu!')
    }
    
    if (escolhaComputador == 'papel' && escolhaUsuario == 'papel'){
        alert('Empate!')
    } else if (escolhaComputador == 'papel' && escolhaUsuario == 'tesoura'){
        alert('Você venceu!')
    } else if (escolhaComputador == 'papel' && escolhaUsuario == 'pedra'){
        alert('Você perdeu!')
    }
    
    if (escolhaComputador == 'tesoura' && escolhaUsuario == 'tesoura'){
        alert('Empate!')
    } else if (escolhaComputador == 'tesoura' && escolhaUsuario == 'pedra'){
        alert('Você venceu!')
    } else if (escolhaComputador == 'tesoura' && escolhaUsuario == 'papel'){
        alert('Você perdeu!')
    }
    
    
}

