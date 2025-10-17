export default function quantidadeProdutos(quantidade) {
  const marcadorDeQuantidade = document.querySelector("#marcadorCategoria");
  marcadorDeQuantidade.textContent = `${quantidade} produtos`;
}
