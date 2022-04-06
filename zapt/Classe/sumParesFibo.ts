import { somaTermosParesFibo } from "../Func"

class SumParesFibo {

    private somaFibo = somaTermosParesFibo;

    handle = (param: number): string => {
        return this.somaFibo(param);
    }

}

export default SumParesFibo;