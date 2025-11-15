console.log("########### Fazendo um map com JavaScript");

const produtos = [
  "Caneta",
  "Lápis",
  "Caderno",
  "Borracha",
  "Apontador",
]

produtos.map((produto) => {
  console.log(produto);
});

const produtosFormatados = produtos.map((produto) => {
  return produto.toUpperCase();
});

console.log(produtosFormatados);


console.log("########### Fazendo um filter com JavaScript");

const limguagens = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "Ruby",
  "Go",
  "PHP",
];

const resultado = limguagens.filter((linguagem) => {
  if (linguagem.length > 3) {
    return limguagens
  }
});
console.log("Linguagens com mais de 3 caracteres:");
console.log(resultado);

const produtos2 = [
  { nome: "Caneta", preco: 2.5, pormocao: true },
  { nome: "Lápis", preco: 1.5, pormocao: false },
  { nome: "Caderno", preco: 15.0, pormocao: true },
  { nome: "Borracha", preco: 0.5, pormocao: false },
  { nome: "Apontador", preco: 3.0, pormocao: true },
]

console.log("Produtos em promoção:");
const resultadoPromocao = produtos2.filter((produto) => {
  if (produto.pormocao) {
    return produto
  }
})

console.log(resultadoPromocao);

console.log("########### Fazendo um findindex() com JavaScript");

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const indiceNumeroMaiorQue50 = numeros.findIndex((numero) => {
  if (numero > 20) {
    return numero
  } 
})

console.log("Índice do primeiro número maior que 50:");
console.log(indiceNumeroMaiorQue50);
console.log(numeros[indiceNumeroMaiorQue50]);


console.log("########### Fazendo um find() com JavaScript");

const valores2 = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95];

const primeiroValorMaiorQue40 = valores2.find((valor) => {
  if (valor > 40) {
    return valor
  }
});

console.log("Primeiro valor maior que 40:");
console.log(primeiroValorMaiorQue40);

const frutas = [
  { nome: "Maçã", quantidade: 10 },
  { nome: "Banana", quantidade: 0 },
  { nome: "Laranja", quantidade: 5 },
  { nome: "Uva", quantidade: 20 },
];

const maca = frutas.find((fruta) => {
  if (fruta.nome === "Maçã") {
    return fruta
  }
})

console.log("Fruta encontrada:");
console.log(maca);

console.log("########### Fazendo um every() com JavaScript");
const idades = [22, 34, 27, 45, 19, 30];

const todasIdadeMaioresQue30 = idades.every((idade) => {
  return idade > 30;
})

console.log("Todas as idades são maiores que 30?");
console.log(todasIdadeMaioresQue30);

console.log("########### Fazendo um some() com JavaScript");
const numeros3 = [3, 7, 12, 19, 25, 30];

const numeroNenorQue18 = numeros3.some((numero) => {
  return numero < 18;
})

console.log("Existe algum número menor que 18?");
console.log(numeroNenorQue18);

console.log("########### Fazendo um reduce() com JavaScript");

const valores3 = [10, 20, 30, 40, 50];

const somaTotal = valores3.reduce((acumulador, valorAtual, index) => {
  console.log(`Acumulador: ${acumulador}, Valor Atual: ${valorAtual}, index: ${index}`);
  return acumulador + valorAtual;
}, 0);

console.log("Soma total dos valores:");
console.log(somaTotal);