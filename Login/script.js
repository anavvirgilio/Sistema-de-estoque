// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Validação simples
    const usuarioValido = "admin";
    const senhaValida = "1234";

    // Mensagem de erro
    const mensagemErro = document.getElementById('mensagemErro');

    if (usuario === usuarioValido && senha === senhaValida) {
        // Redirecionar para a página de estoque
        window.location.href = "index.html"; // Altere para o nome da página do estoque
    } else {
        mensagemErro.textContent = "Usuário ou senha incorretos!";
    }
});
