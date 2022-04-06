"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Func_1 = require("../Func");
class MaiorPrimo {
    constructor() {
        this.maiorPrimo = Func_1.calcMaiorFatorPrimo;
        this.handle = (param) => {
            return this.maiorPrimo(param);
        };
    }
}
exports.default = MaiorPrimo;
