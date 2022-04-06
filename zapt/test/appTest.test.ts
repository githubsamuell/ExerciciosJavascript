import { expect } from 'chai';
import { SumMultiplos, SumParesFibo, MaiorPrimo } from '../Classe';

describe('Testa a classe SumMultiplos', () => {
    const classeMult = new SumMultiplos();
    it('Testa se SumMultiplos é uma classe', () => {
        expect(classeMult).to.be.instanceOf(SumMultiplos);
    })

    it('Testa se SumMultiplos tem a propriedade handle', () => {
        expect(classeMult).to.haveOwnProperty("handle");
    })

    it('Testa se a propriedade handle retorna uma string', () => {
        expect(classeMult.handle(1000)).to.be.a("string");
    })
})

describe('Testa a classe SumParesFibo', () => {
    const classeFibo = new SumParesFibo();
    it('Testa se SumParesFibo é uma classe', () => {
        expect(classeFibo).to.be.instanceOf(SumParesFibo);
    })

    it('Testa se SumParesFibo tem a propriedade handle', () => {
        expect(classeFibo).to.haveOwnProperty("handle");
    })

    it('Testa se a propriedade handle retorna uma string', () => {
        expect(classeFibo.handle(1000)).to.be.a("string");
    })
})

describe('Testa a classe MaiorPrimo', () => {
    const classePrimo = new MaiorPrimo();
    it('Testa se MaiorPrimo é uma classe', () => {
        expect(classePrimo).to.be.instanceOf(MaiorPrimo);
    })

    it('Testa se MaiorPrimo tem a propriedade handle', () => {
        expect(classePrimo).to.haveOwnProperty("handle");
    })

    it('Testa se a propriedade handle retorna uma string', () => {
        expect(classePrimo.handle(1000)).to.be.a("string");
    })
})