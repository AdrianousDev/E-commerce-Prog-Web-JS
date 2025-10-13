import chamarApi from "./modules/chamarApi.js";
import exibirProdutos from "./modules/exibirProdutos.js";
import initCategorias from "./modules/categorias.js";
import quantidadeProdutos from "./modules/quantidadeProdutos.js";
import barraDeBusca from "./modules/barraDeBusca.js";
import initModal from "./modules/initModal.js";

const urlProdutos = "https://fakestoreapi.com/products";
const produtos = await chamarApi(urlProdutos);

const urlCategorias = "https://fakestoreapi.com/products/categories";
const categorias = await chamarApi(urlCategorias);

exibirProdutos(produtos);
initCategorias(produtos, categorias);
quantidadeProdutos(produtos.length);
barraDeBusca(produtos);
initModal(produtos);
