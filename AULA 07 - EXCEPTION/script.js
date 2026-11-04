
const botaoIdade = document.getElementById("verificar");
const resultadoIdade = document.getElementById("resultadoIdade");
const finalizacaoIdade = document.getElementById("finalizacaoIdade");

botaoIdade.addEventListener("click", function (){
    
    finalizacaoIdade.textContent = "";

    try {
        const textoIdade = document.getElementById("idade").value;

        const idade = Number(textoIdade);

        if (idade < 18) {
            throw new Error("Acesso permitido apenas para maiores de idade.")
        }
        resultadoIdade.textContent = "Acesso autorizado!";

    } catch (erro) {
        resultadoIdade.textContent = "Erro: " + erro.message;
    } finally {
        finalizacaoIdade.textContent = "Verificação finalizada.";
    }
});

const botaoDividir = document.getElementById("dividir");
const resultadoDivisao = document.getElementById("resultadoDivisao");
const finalizacaoDivisao = document.getElementById("finalizacaoDivisao");

botaoDividir.addEventListener("click", function () {

    finalizacaoDivisao.textContent = "";

    try {

        const texto1 = document.getElementById("numero1").value;
        const texto2 = document.getElementById("numero2").value;
        const numero1 = Number(texto1);
        const numero2 = Number(texto2);

        if (texto1 === "" || texto2 === "") {
            throw new Error("Preencha os dois campos.")
        }

        if (!Number.isFinite(numero1) || !Number.isFinite(numero2)) {
            throw new Error ("Digite apenas números válidos.");
        }

        if (numero2 === 0) {
            throw new Error ("Não é possível dividir por zero.");
        }

        const divisao = numero1 / numero2;
        resultadoDivisao.textContent = "Resultado: "+ divisao;

    } catch (erro) {
        resultadoDivisao.textContent = "Erro: " + erro.message;
    } finally {
        finalizacaoDivisao.textContent = "Cálculo finalizado.";
    }
});

