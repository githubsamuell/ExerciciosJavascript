"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Classe_1 = require("./Classe");
var ValoresProblema;
(function (ValoresProblema) {
    ValoresProblema[ValoresProblema["Value1"] = 1000] = "Value1";
    ValoresProblema[ValoresProblema["Value2"] = 4000000] = "Value2";
    ValoresProblema[ValoresProblema["Value3"] = 600851475143] = "Value3";
})(ValoresProblema || (ValoresProblema = {}));
const resolveReq1 = new Classe_1.SumMultiplos();
const resolveReq2 = new Classe_1.SumParesFibo();
const resolveReq3 = new Classe_1.MaiorPrimo();
const ResultClass1 = resolveReq1.handle(ValoresProblema.Value1);
const ResultClass2 = resolveReq2.handle(ValoresProblema.Value2);
const ResultClass3 = resolveReq3.handle(ValoresProblema.Value3);
console.log(`Resposta 1: ${ResultClass1}`);
console.log(`Resposta 2: ${ResultClass2}`);
console.log(`Resposta 3: ${ResultClass3}`);
