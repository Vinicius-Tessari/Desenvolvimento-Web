const botao = document.getElementById("verificar");

const resultado = document.getElementById("resultado");

botao.addEventListener("click", function(){
    const valorDigitado = document.getElementById("idade").value;

    const idade = Number(valorDigitado);

    if (valorDigitado === "" || idade < 0) {
        resultado.textContent = " Informe uma idade válida.";
    } else if (idade >= 18) {
        resultado.textContent = "Você é maior de idade.";
    }else {
        resultado.textContent = "Você é menor de idade.";
    }
});