// Exemplo de código assíncrono usando setTimeout
// console.log('Início do código assíncrono');
// console.log("################  setTimeout ###########");
// setTimeout(() => {
//     console.log('Executando callback após 2 segundos');
// }, 1000);

// let valor = 10;
// const intervalor = setInterval(() => {
//     console.log('Valor atual:', valor);
//     valor -= 1;
//     if (valor <= 0) {
//         console.log('Contagem regressiva:', valor);
//         clearInterval(intervalor)
//     }
// }, 1000);


// Exemplo de Promise
console.log("################ Exemplo de Promise ###########");
function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = true

            if (sucesso) {
                resolve('A operação foi bem sucedida!');
            } else {
                reject('Houve um erro na operação.');
            }

        }, 2000);
    })
}

// console.log(await asyncFunction());

// console.log('Executando operação assíncrona com Promise...');
// asyncFunction()
//     .then(
//         (sucesso) => {
//             console.log(sucesso);
//         }
//     )
//     .catch(
//         (erro) => {
//             console.log(erro);
//         }
//     )
//     .finally(
//         () => {
//             console.log('Operação finalizada.');
//         }
//     )

// Não de seve fazer isso, em funçoes assíncronas usar 
// console.log(asyncFunction())

// async function feath(){
//     const resposta = await asyncFunction();
//     console.log(resposta);
// }
// feath();

// const feath2 = async () => {
//     try {
//         const resposta = await asyncFunction();
//         console.log(resposta);
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }
// feath2();

console.log("################ exmplo de ordem de execução em jS ###########");
console.log(1);

// micro task
queueMicrotask(() => {
    console.log(2);
})

// macro task
setTimeout(() =>{
    console.log(3);
})

console.log(4);

// micro task com Promise
Promise.resolve(true).then(() => {
    console.log(5);
})