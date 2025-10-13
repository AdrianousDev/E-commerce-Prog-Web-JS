import preencherModalProduto from "./preencherModalProduto.js";

export default function initModal(produtos) {
  const botaoFechar = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");
  const produtosCard = document.querySelectorAll("[data-produto]");

  if (produtosCard && botaoFechar && containerModal) {
    function toggleModal(event) {
      if (event.currentTarget == botaoFechar) {
        containerModal.classList.remove("flex");
        containerModal.classList.add("hidden");
      } else {
        containerModal.classList.remove("hidden");
        containerModal.classList.add("flex");

        const id = event.currentTarget.dataset.id;
        const produtoEscolhido = produtos.find((produto) => produto.id == id);
        preencherModalProduto(produtoEscolhido);
      }
    }

    function clickForaModal(event) {
      if (event.target === this) {
        containerModal.classList.remove("flex");
        containerModal.classList.add("hidden");
      }
    }

    produtosCard.forEach((produto) => {
      produto.addEventListener("click", toggleModal);
    });
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickForaModal);
  }
}
