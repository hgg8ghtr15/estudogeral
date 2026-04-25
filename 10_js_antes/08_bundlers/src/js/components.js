export function titulo(titulo){
    const elemento = document.createElement('h1');
    elemento.textContent = titulo;

    document.body.appendChild(elemento);
}