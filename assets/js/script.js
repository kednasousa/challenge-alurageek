//FUNÇÃO REDIRECIONA PARA PÁGINA DE LOGIN
// Obtém o botão pelo ID
const meuBotao = document.getElementById('login');

// Função para redirecionar para a outra página após o clique
function redirecionarParaOutraPagina() {
	// Altere a URL abaixo para a página desejada
	window.location.href = 'login.html';
}

// Adiciona o ouvinte de evento de clique ao botão
meuBotao.addEventListener('click', redirecionarParaOutraPagina);