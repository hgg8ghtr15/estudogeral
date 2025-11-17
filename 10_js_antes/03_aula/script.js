const endereco = {
  rua: "Rua dos Pinheiros",
  numero: 1293,
  bairro: "Centro",
}

console.log("######## Conceito de Imutabilidade em JavaScript");
// aplico conseito de imutabilidade
const endereco2 = { ...endereco }
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


// Conceito de shadow copy
console.log("######## Conceito de shadow copy");

const htmlCurso = {
  curso: "html",
  estudantes: [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
  ]
}

// Copia raza do objeto htmlCurso forma errada ele faz referencia assim.
const jsCurso = { ...htmlCurso, curso: "JavaScript" };
jsCurso.estudantes.push({ nome: "Pedro", idade: 28 });


// Copia correta do objeto htmlCurso
const cssCurso = {
  ...htmlCurso,
  curso: "CSS",
  estudantes: [...htmlCurso.estudantes, { nome: "Ana", idade: 22 }],
}
cssCurso.estudantes.push({ nome: "Carla", idade: 27 });// Adiciona mais um estudante ao curso de CSS

console.log(htmlCurso, jsCurso, cssCurso)





// bloqueando objeto
console.log("######## Conceito de Object.freeze");

const book = {
  title: "JavaScript",
  autor: "João da Silva",
  categoria: {
    nomeCategoria : "programação",
  }
}
console.log("Antes de congelar:", book);

Object.freeze(book);
// o fereeze bloqueia alterações no objeto alinhados
book.title = "HTML";
book.categoria.nomeCategoria = "Pscicologia";
console.log("Depois de congelar:", book);


console.log("######## Conceito de Object.freeze de forma profunda");
function deepFreeze(obj){
  const props = Reflect.ownKeys(obj);

  for(const prop of props){
    const value = obj[prop];
    if((value && typeof value === 'object') || typeof value === 'function'){
      deepFreeze(value);
    }
  }
  return Object.freeze(obj);
}

console.log("Antes de congelar profundamente:", book);
deepFreeze(book);
book.categoria.nomeCategoria = "Design";
console.log("Depois de congelar profundamente:", book);


// manipulando objeto com princípio de imutabilidade
console.log("######## Manipulando objeto com princípio de imutabilidade");
const produto = {
  nome: "Smartphone",
  preco: 2000,
  detalhes: {
    fabricante: "Samsung",
    modelo: "Galaxy S21",
  }
}

const produtoAtualizado = {
  ...produto,
  preco: 1800,
  detalhes: {
    modelo: "-----",}
}
console.log("Produto original:", produto);
console.log("Produto atualizado:", produtoAtualizado);

//removendo propriedade de um objeto com desentruturação
console.log("######## Removendo propriedade de um objeto com desentruturação");

const { preco, ...produto3 } = produto;
console.log("Produto original:", produto);
console.log("Produto sem categoria:", produto3);