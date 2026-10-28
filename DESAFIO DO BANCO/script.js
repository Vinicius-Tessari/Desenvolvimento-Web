const campoOperacao = document.getElementById("operacao");
const campoValor = document.getElementById("valor");
const botaoExecutar = document.getElementById("executar");
const campoResultado = document.getElementById("resultado");
const campoSaldo = document.getElementById("saldo-atual");

let saldo = 1000;

const historico = ["Abertura da conta: R$ 1.000,00"];

function formatarMoeda(valor) {
    return "R$ " + valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

campoOperacao.addEventListener("change", function () {
    const precisaValor = campoOperacao.value === "depositar" || campoOperacao.value === "sacar";

    campoValor.disabled = !precisaValor;
    campoValor.value = "";
    campoResultado.textContent = "Clique em Executar operação.";
});

botaoExecutar.addEventListener("click", function () {
    const operacao = campoOperacao.value;
    const textoValor = campoValor.value;
    const valor = Number(textoValor);

    switch (operacao) {
        case "saldo":
            campoResultado.textContent = "Saldo disponível: " + formatarMoeda(saldo);
            break;

        case "depositar":
            if (textoValor === "" || !Number.isInteger(valor) || valor <= 0) {
                campoResultado.textContent = "Erro: informe um valor inteiro maior que zero.";
            } else {
                saldo = saldo + valor;
                historico.push("Depósito: +" + formatarMoeda(valor));

                campoResultado.textContent =
                    "Depósito de " + formatarMoeda(valor) + " realizado com sucesso!\n" +
                    "Novo saldo: " + formatarMoeda(saldo);

                campoValor.value = "";
            }
            break;

        case "sacar":
            if (textoValor === "" || !Number.isInteger(valor) || valor <= 0) {
                campoResultado.textContent = "Erro: informe um valor inteiro maior que zero.";
            } else if (valor === 1 || valor === 3) {
                campoResultado.textContent = "Erro: não é possível entregar esse valor apenas com notas.";
            } else if (valor > saldo) {
                campoResultado.textContent = "Erro: saldo insuficiente para realizar o saque.";
            } else {
                saldo = saldo - valor;
                historico.push("Saque: -" + formatarMoeda(valor));

                let restante = valor;
                let notas100 = 0;
                let notas50 = 0;
                let notas20 = 0;
                let notas10 = 0;
                let notas5 = 0;
                let notas2 = 0;

                if (restante % 2 !== 0) {
                    restante = restante - 5;
                    notas5++;
                }

                while (restante >= 100) {
                    restante = restante - 100;
                    notas100++;
                }

                while (restante >= 50) {
                    restante = restante - 50;
                    notas50++;
                }

                while (restante >= 20) {
                    restante = restante - 20;
                    notas20++;
                }

                while (restante >= 10) {
                    restante = restante - 10;
                    notas10++;
                }

                while (restante >= 2) {
                    restante = restante - 2;
                    notas2++;
                }

                const totalNotas = notas100 + notas50 + notas20 + notas10 + notas5 + notas2;

                campoResultado.textContent =
                    "Saque de " + formatarMoeda(valor) + " realizado com sucesso!\n\n" +
                    "Notas entregues:\n" +
                    notas100 + " nota(s) de R$ 100\n" +
                    notas50 + " nota(s) de R$ 50\n" +
                    notas20 + " nota(s) de R$ 20\n" +
                    notas10 + " nota(s) de R$ 10\n" +
                    notas5 + " nota(s) de R$ 5\n" +
                    notas2 + " nota(s) de R$ 2\n\n" +
                    "Total de notas: " + totalNotas + "\n" +
                    "Saldo restante: " + formatarMoeda(saldo);

                campoValor.value = "";
            }
            break;

        case "extrato":
            let mensagemExtrato = "EXTRATO\n\n";

            for (let i = 0; i < historico.length; i++) {
                mensagemExtrato = mensagemExtrato + (i + 1) + ". " + historico[i] + "\n";
            }

            mensagemExtrato = mensagemExtrato + "\nSaldo atual: " + formatarMoeda(saldo);
            campoResultado.textContent = mensagemExtrato;
            break;

        default:
            campoResultado.textContent = "Erro: operação desconhecida.";
            break;
    }

    campoSaldo.textContent = formatarMoeda(saldo);
});
