"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Func_1 = require("../Func");
class SumParesFibo {
    constructor() {
        this.somaFibo = Func_1.somaTermosParesFibo;
        this.handle = (param) => {
            return this.somaFibo(param);
        };
    }
}
exports.default = SumParesFibo;
