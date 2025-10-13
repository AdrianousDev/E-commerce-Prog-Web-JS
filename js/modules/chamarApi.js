export default async function chamarApi(url) {
  const response = await fetch(url);
  const dados = await response.json();
  return dados;
}
