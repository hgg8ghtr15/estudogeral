import express from 'express';


function soma (a: number, b: number): number {
    return a + b;
}

const resultado: number = soma(2, 6);

// console.log(`O resultado da soma é: ${resultado}`);