document.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");
    const interesse = document.getElementById("interesse");

    let erros = [];

    if (nome.value.trim().length < 3) {
        erros.push("O nome deve ter no mínimo 3 caracteres.");
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
        erros.push("Informe um e-mail válido.");
    }

    if (cpf.value.replace(/\D/g, "").length !== 11) {
        erros.push("CPF deve conter 11 números.");
    }

    if (telefone.value.replace(/\D/g, "").length < 10) {
        erros.push("Telefone deve conter 10 ou 11 números.");
    }

    if (cep.value.replace(/\D/g, "").length !== 8) {
        erros.push("CEP deve conter 8 números.");
    }

    if (interesse.value.trim().length < 10) {
        erros.push("Explique melhor seu interesse em ser voluntário.");
    }

    if (erros.length > 0) {
        alert("⚠ Corrija os seguintes erros:\n\n" + erros.join("\n"));
        return;
    }

    alert("✅ Cadastro enviado com sucesso!");
    event.target.reset();
});
