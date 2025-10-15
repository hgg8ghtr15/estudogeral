// console.log(document)

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