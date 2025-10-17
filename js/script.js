import chamarApi from "./modules/chamarApi.js";
import exibirProdutos from "./modules/catalogoHomePage/exibirProdutos.js";
import initCategorias from "./modules/catalogoHomePage/categorias.js";
import quantidadeProdutos from "./modules/catalogoHomePage/quantidadeProdutos.js";
import barraDeBusca from "./modules/catalogoHomePage/barraDeBusca.js";
import initModal from "./modules/modal/initModal.js";
import initCarrinho from "./modules/carrinhoHomePage/initCarrinho.js";

const urlProdutos = "https://fakestoreapi.com/products";
const produtos = await chamarApi(urlProdutos);

const urlCategorias = "https://fakestoreapi.com/products/categories";
const categorias = await chamarApi(urlCategorias);

exibirProdutos(produtos);
initCategorias(produtos, categorias);
quantidadeProdutos(produtos.length);
barraDeBusca(produtos);
initModal(produtos);
initCarrinho(produtos);
