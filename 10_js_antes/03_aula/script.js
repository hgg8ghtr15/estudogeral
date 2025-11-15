const endereco = {
  rua: "Rua dos Pinheiros",
  numero: 1293,
  bairro: "Centro",
}

console.log("######## Conceito de Imutabilidade em JavaScript");
// aplico conseito de imutabilidade
const endereco2 = { ...endereco}
endereco2.numero = 1000;

console.log("Endereço 1:", endereco);
console.log("Endereço 2:", endereco2);

// não aplico o conceito de imutabilidade
console.log("######## Conceito de Imutabilidade em JavaScript");
const endereco3 = endereco;
endereco3.numero = 500;

console.log("Endereço 1:", endereco);
console.log("Endereço 2:", endereco2);
console.log("Endereço 3:", endereco3);