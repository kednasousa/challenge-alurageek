//GET
const listaProdutos = () =>
	fetch("https://64c53359c853c26efada9baa.mockapi.io/produto")
	.then((resposta) => resposta.json())
	.catch((error) => console.log(error));

const listarUmProduto = (id) => {
	return fetch(`https://64c53359c853c26efada9baa.mockapi.io/produto${id}`).then((resposta) => {
		return resposta.json();
	});
};

//POST
const criaProdutos = (name, imageUrl, price) => {
	return fetch(`https://64c53359c853c26efada9baa.mockapi.io/produto`, {
		method: "POST",
	}
}