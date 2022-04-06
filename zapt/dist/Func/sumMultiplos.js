"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const somaDosMultiplos3ou5 = (param) => {
    let result = 0;
    for (let i = 0; i < param; i += 1) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i;
            /* console.log(`resto da divisao por 3 do numero ${i}: ${i%3}.Resto da divisao por 5 do numero ${i}: ${i%5}`) */
        }
    }
    return `A soma de todos os multiplos de 3 ou 5 abaixo de ${param} é ${result}`;
};
exports.default = somaDosMultiplos3ou5;
