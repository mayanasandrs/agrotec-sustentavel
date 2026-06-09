function limpezaManual() {

    const status = document.getElementById("status");
    const sujeira = document.getElementById("sujeira");
    const ultimaLimpeza = document.getElementById("ultima-limpeza");

    status.innerText = "Limpeza em andamento...";

    setTimeout(() => {

        status.innerText = "Operando";
        sujeira.innerText = "0%";

        const agora = new Date();

        ultimaLimpeza.innerText =
            agora.toLocaleDateString("pt-BR") +
            " - " +
            agora.toLocaleTimeString("pt-BR");

        alert("✅ Limpeza concluída com sucesso!");

    }, 5000);
}

// Simulação automática do nível de sujeira
setInterval(() => {

    const sujeira = document.getElementById("sujeira");

    let valor = parseInt(sujeira.innerText);

    if(valor < 100){
        valor += Math.floor(Math.random() * 5);
        sujeira.innerText = valor + "%";
    }

}, 10000);
