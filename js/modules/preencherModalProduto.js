export default function preencherModalProduto(produto) {
  const modalProduto = document.querySelector("[data-modal='produto']");
  modalProduto.innerHTML = "";
  modalProduto.innerHTML = `
      <div class="bg-white rounded-lg shadow-md overflow-hidden p-4 flex flex-col justify-between max-w-[600px] h-full" data-produto data-id="${
        produto.id
      }">
        <h5 class="text-lg font-semibold text-center text-blue-800 mb-4" title="${
          produto.title
        }">
          ${produto.title}
        </h5>

        <div class="flex justify-center mb-4">
          <img src="${produto.image}" alt="${
    produto.title
  }" class="h-40 object-contain" />
        </div>

        <div class="mb-4">
          <span class="block text-xl font-bold text-green-600 mb-1">
            R$ ${produto.price.toFixed(2)}
          </span>
          <div class="flex justify-between text-sm text-gray-600">
            <span class="capitalize text-gray-500">${produto.category}</span>
            <span>
              ⭐ ${produto.rating.rate}
              <span class="text-xs text-gray-400">(${
                produto.rating.count
              })</span>
            </span>
          </div>
        </div>

        <p class="text-sm text-gray-700 mb-4" title="${produto.description}">
          ${produto.description}.
        </p>
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition">
            Adicionar ao Carrinho
        </button>
      </div>
    `;
}
