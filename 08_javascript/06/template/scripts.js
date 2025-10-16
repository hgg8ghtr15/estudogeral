console.log(document)

console.log(document.title)

// acessa
console.log("----------POR ID")
const guest = document.getElementById("guest-2")
console.log(guest)
console.dir(guest)//propriedades objeto

// busca por Name
console.log("----------Por Nome Class")
const guestByClass = document.getElementsByClassName("guest")
console.log(guestByClass.item(0))

// busca pela tag
console.log("----------Por tagName")
const guestByTag = document.getElementsByTagName("form")
console.log(guestByTag)

//busca por queryselect
console.log("----------Por queryselect ID ")
const querSelectorId = document.querySelector("#guest-2")
console.log(querSelectorId)

console.log("----------Por queryselect ID ")
// const querSelectorClass = document.querySelector(".guest")
const querSelectorClass = document.querySelectorAll(".guest")
console.log(querSelectorClass)

console.log("########################################################")

const guest2 = document.querySelector("#guest-1 span")
// console.log(guest.textContent)
// guest.textContent = "Fabio Lucas Marconi"
// Retorna o conteudo visivel e oculto
console.log(guest2.textContent)
// retoena somente o conteudo visivel
console.log(guest2.innerText)
// retorna o HTML como texto
console.log(guest2.innerHTML)
console.log("########################################################")

const input = document.querySelector("#name")
// adiciona uma classe ao input
input.classList.add("input-error")

// remove uma classe ao input
input.classList.remove("input-error")

// adiciona uma classe ao input se não tiver, remove se tiver
input.classList.toggle("input-error")

const button = document.querySelector("button")
button.style.backgroundColor = "blue"

// input.setAttribute("disabled", true)

console.log("########################################################")

const tagUl = document.querySelector("ul")
const li = document.createElement("li")
const span = document.createElement("span")

li.classList.add("guest")
li.setAttribute("id", "guest-3")
span.textContent = "Fabio Lucas Marconi"

li.append(span)
tagUl.prepend(li)

console.log(tagUl)

console.log("########################################################")

// window.addEventListener("load", () => {
//     console.log("A pagina foi carregada")
// })

// addEventListener("click", (event) => {
//     event.preventDefault()
//     console.log(event)
//     console.log(event.target)  
// })

const tagUl1 = document.querySelector("ul")
tagUl1.addEventListener("mouseenter", (e) => {
  console.log(e.target)
})

const form2 = document.querySelector("form")
// form2.onsubmit = (e)=>{
//     e.preventDefault()
//     console.log("Voce fez um submit.")
// }

const input2 = document.querySelector("input")

// aqui ele pega todos os caracteres
// input2.addEventListener("keydown", (event)=>{
//     console.log(event.key)
// })

// Aqui ele pega apenas o carateres a-z, 0-9, especiais
// input2.addEventListener("keypress", (event)=>{
//     console.log(event.key)
// })

input2.addEventListener("input", () => {
  // const valor = input2.value
  // const regex = /\D+/g
  // // atende o reges
  // // console.log(valor.match(regex))
  // const isValid = regex.test(valor)
  // console.log(isValid)
})

form2.addEventListener("submit", (event) => {
  event.preventDefault()
  const regex = /\D+/g
  const valor = input2.value
  if(regex.test(valor)){
    alert("Ok")
  }else{
    alert("Padrão incorreto")
  }
  // const value = input.value.replace(regex, "")
  // console.log(value)

})