"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calcMaiorFatorPrimo = (param) => {
    let result;
    for (let i = 2; i < Math.sqrt(param); i += 1) {
        if (param % i === 0) {
            return calcMaiorFatorPrimo(param / i);
        }
        result = param;
    }
    return `Seu maior fator Primo é ${result}`;
};
exports.default = calcMaiorFatorPrimo;
