calcularSaldo(150, 30)

function calcularSaldo(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    let rank;


    if (saldoVitorias <= 10){
        rank = "Ferro"
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20){
        rank = "Bronze"
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50){
        rank = "Prata"
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80){
        rank = "Ouro"
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90){
        rank = "Diamante"
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100){
        rank = "Lendário"
    }else {
        (saldoVitorias >= 101)
        rank = "Imortal"

    console.log("O Herói tem saldo de " + saldoVitorias + " vitorias e está no nível de " + rank)
    }
}

