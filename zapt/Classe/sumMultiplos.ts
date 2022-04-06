import { somaDosMultiplos3ou5 } from "../Func"

class SumMultiplos {

    private somaMultipplos = somaDosMultiplos3ou5;

    handle = (param: number): string => {
        return this.somaMultipplos(param);
    }

}

export default SumMultiplos;