"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcMaiorFatorPrimo = exports.somaTermosParesFibo = exports.somaDosMultiplos3ou5 = void 0;
var sumMultiplos_1 = require("./sumMultiplos");
Object.defineProperty(exports, "somaDosMultiplos3ou5", { enumerable: true, get: function () { return __importDefault(sumMultiplos_1).default; } });
var sumParesFibo_1 = require("./sumParesFibo");
Object.defineProperty(exports, "somaTermosParesFibo", { enumerable: true, get: function () { return __importDefault(sumParesFibo_1).default; } });
var maiorPrimo_1 = require("./maiorPrimo");
Object.defineProperty(exports, "calcMaiorFatorPrimo", { enumerable: true, get: function () { return __importDefault(maiorPrimo_1).default; } });
