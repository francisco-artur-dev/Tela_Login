const email = document.getElementById("email");
const senha = document.getElementById("senha");
const sms = document.getElementById("sms");
const validaSenha = document.getElementById("validaSenha");
const valiEmail = document.getElementById("valiEmail");

function validaCampos() {
    // Reset estilos
    email.style.borderColor = "";
    senha.style.borderColor = "";
    sms.innerText = "";
    validaSenha.innerText = "";

    // Validação básica
    if (email.value.trim() === "" || senha.value.trim() === "") {
        if (email.value.trim() === "") {
            email.style.borderColor = "red";
        }

        if (senha.value.trim() === "") {
            senha.style.borderColor = "red";
        }

        sms.innerText = "Preencha todos os campos.";
        sms.style.color = "red";
        sms.style.visibility = "visible"; // garantir que a mensagem apareça
        return false; // impede o envio
    }
    // Validação do email
    if (!emailValido(email.value)) {
        email.style.borderColor = "red";
        valiEmail.innerText = "Digite um e-mail válido.";
        valiEmail.style.color = "red";
        valiEmail.style.visibility = "visible";
        esconderMsg(valiEmail, 3000); // chama a função para esconder a mensagem após 3 segundos
        email.focus();
        return false;
}

    // Validação da senha
    if (senha.value.length < 8) {
        senha.style.borderColor = "red";
        validaSenha.innerText = "Senha deve ter no mínimo 8 caracteres.";
        validaSenha.style.color = "red";
        validaSenha.style.visibility = "visible"; // garantir que a mensagem apareça
        esconderMsg(validaSenha, 3000);//chama a função para esconder a mensagem após 3 segundos
        senha.focus(); // Foca no campo senha
        return false;  // impede o envio
    }

    // Tudo certo
    sms.innerText = "Dados enviados com sucesso!";
    sms.style.color = "green";
    sms.style.visibility = "visible"; // garantir que a mensagem apareça

    // Opcional: limpar campos após envio
    email.value = "";
    senha.value = "";

    // função para esconder mensagem depois de 2 segundos
    esconderMsg(sms, 2000);
    return true; // permite o envio
}

function esconderMsg(elemento, delay = 2000) {
    setTimeout(() => {
        elemento.style.visibility = "hidden";
        elemento.innerText = "";
    }, delay);
}

function emailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

