// importa funções específicas de calc.js
import soma, {sub} from './calc.js';
// importa todas as funções de calc.js
// import * as calc from './calc.js';
import { Calculadora as Calc } from './calc.js';

const calc = new Calc();
console.log(calc.soma(5, 3));
console.log(calc.sub(10, 4));

console.log(soma(2, 3));
console.log(sub(5, 2));
