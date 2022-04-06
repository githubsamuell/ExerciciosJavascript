import { MaiorPrimo, SumMultiplos, SumParesFibo } from "./Classe";

enum ValoresProblema {
    Value1 = 1000,
    Value2 = 4000000,
    Value3 = 600851475143
}

const resolveReq1 = new SumMultiplos();
const resolveReq2 = new SumParesFibo();
const resolveReq3 = new MaiorPrimo();
const ResultClass1 = resolveReq1.handle(ValoresProblema.Value1);
const ResultClass2 = resolveReq2.handle(ValoresProblema.Value2);
const ResultClass3 = resolveReq3.handle(ValoresProblema.Value3);
console.log(`Resposta 1: ${ResultClass1}`);
console.log(`Resposta 2: ${ResultClass2}`);
console.log(`Resposta 3: ${ResultClass3}`);