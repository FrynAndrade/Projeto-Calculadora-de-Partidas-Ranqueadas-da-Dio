calcularSaldo(150, 30)

function calcularSaldo(vitorias, derrotas){
    calcularSaldo = vitorias - derrotas
    let rank;


    if (calcularSaldo <= 10){
        rank = "Ferro"
    } else if (calcularSaldo >= 11 && calcularSaldo <= 20){
        rank = "Bronze"
    } else if (calcularSaldo >= 21 && calcularSaldo <= 50){
        rank = "Prata"
    } else if (calcularSaldo >= 51 && calcularSaldo <= 80){
        rank = "Ouro"
    } else if (calcularSaldo >= 81 && calcularSaldo <= 90){
        rank = "Diamante"
    } else if (calcularSaldo >= 91 && calcularSaldo <= 100){
        rank = "Lendário"
    }else {
        (calcularSaldo >= 101)
        rank = "Imortal"

    console.log("O Herói tem de saldo de " + calcularSaldo + " vitorias e está no nível de " + rank)
}
}

