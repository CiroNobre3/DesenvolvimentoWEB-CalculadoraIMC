function calcIMC(){
    var peso = document.getElementById("peso").value
    var altura = document.getElementById("altura").value
    var imc = peso/(altura*altura)
    var imc2 = imc.toFixed(2)

    if (imc2 < 18.5){
        document.getElementById('botao').innerText = `Seu IMC é ${imc2}, você está MAGRO!`
    }

    if (imc2 >= 18.5 && imc2 <=24.9){
        document.getElementById('botao').innerText = `Seu IMC é ${imc2}, você está com o peso NORMAL!`
    }
    
    if (imc2 >= 25.0 && imc2 <= 29.9){
        document.getElementById('botao').innerText = `Seu IMC é ${imc2}, você está ACIMA DO PESO!`
    }

    if (imc2 >= 30.0 && imc2 <= 39.9){
        document.getElementById('botao').innerText = `Seu IMC é ${imc2}, você está OBESO!`
    }

    if (imc2 >= 40.0){
        document.getElementById('botao').innerText = `Seu IMC é ${imc2}, você está em OBESIDADE GRAVE!`
    }

}