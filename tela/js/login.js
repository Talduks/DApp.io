
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const usernameValue = username.value;
    const passwordValue = password.value;

    if (usernameValue === "talduks" && passwordValue === "1234") {
        alert("Login realizado com sucesso!");
    } else {
        alert("Usuário ou senha inválidos!");
    }

    username.value = "";
    password.value = "";
});