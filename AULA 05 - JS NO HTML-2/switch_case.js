const botao = document.getElementById("verificar");

const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
    
    const dia = document.getElementById("dia").value;

    switch (dia) {

        case "1":
            resultado.textContent = "Segunda-feira";
            break;
        
        case "2":
            resultado.textContent = "Terça-feira";
            break;
            
        case "3":
            resultado.textContent = "Quarta-feira";
            break;

        case "4":
            resultado.textContent = "Quinta-feira";
            break;

        case "5":
            resultado.textContent = "Sexta-feira";
            break;

        default:
            resultado.textContent = "Selecione um número. ";

    }
});