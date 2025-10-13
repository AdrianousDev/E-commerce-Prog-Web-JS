export default function quantidadeProdutos(quantidade) {
  const marcadorDeQuantidade = document.querySelector("#marcador");
  marcadorDeQuantidade.textContent = `${quantidade} produtos`;
}
