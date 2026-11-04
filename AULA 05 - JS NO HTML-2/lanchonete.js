
const botao = document.getElementById("verificar");

const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {

    const produto = document.getElementById("produto").value;

    switch (produto) {

        case "1":
            resultado.textContent = "Hambúrguer - R$ 25,00";
            break;

        case "2":
            resultado.textContent = "Pizza - R$ 30,00";
            break;

        case "3":
            resultado.textContent = "Cachorro-quente - R$ 18,00";
            break;

        case "4":
            resultado.textContent = "Refrigerante - R$ 8,00";
            break;

        default:
            resultado.textContent = "Selecione um produto.";
    }
});