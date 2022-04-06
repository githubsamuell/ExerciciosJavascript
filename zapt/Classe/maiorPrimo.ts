import { calcMaiorFatorPrimo } from "../Func"

class MaiorPrimo {

    private maiorPrimo = calcMaiorFatorPrimo;

    handle = (param: number): string => {
        return this.maiorPrimo(param);
    }

}

export default MaiorPrimo;