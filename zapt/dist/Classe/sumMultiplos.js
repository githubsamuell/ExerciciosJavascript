"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Func_1 = require("../Func");
class SumMultiplos {
    constructor() {
        this.somaMultipplos = Func_1.somaDosMultiplos3ou5;
        this.handle = (param) => {
            return this.somaMultipplos(param);
        };
    }
}
exports.default = SumMultiplos;
