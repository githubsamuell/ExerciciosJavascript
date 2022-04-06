"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const somaTermosParesFibo = (param) => {
    let result = 0;
    let termoAnterior = 0;
    let termoAtual = 1;
    let proximoTermo = 1;
    for (let i = 0; i < param; i = termoAnterior) {
        /* console.log(`todos numeros de fibonaci ${proximoTermo}`); */
        if (proximoTermo % 2 === 0 && proximoTermo < param) {
            /* console.log(`So os pares Abaixo de ${param}: ${proximoTermo}`); */
            result += proximoTermo;
        }
        termoAtual = proximoTermo;
        proximoTermo = termoAtual + termoAnterior;
        termoAnterior = termoAtual;
    }
    return `A soma de todos os termos pares de fibonnaci abaixo de ${param} é ${result}`;
};
exports.default = somaTermosParesFibo;
