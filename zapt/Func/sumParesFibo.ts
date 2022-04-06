const somaTermosParesFibo = (param: number): string => {
    let result: number = 0;
    let termoAnterior: number = 0;
    let termoAtual: number = 1;
    let proximoTermo: number = 1;

    for(let i = 0; i < param; i = termoAnterior){
        /* console.log(`todos numeros de fibonaci ${proximoTermo}`); */
        if(proximoTermo % 2 === 0 && proximoTermo < param) {
            /* console.log(`So os pares Abaixo de ${param}: ${proximoTermo}`); */
            result += proximoTermo;
        }
        termoAtual = proximoTermo;
        proximoTermo = termoAtual + termoAnterior;
        termoAnterior = termoAtual;
    
    }
    return `A soma de todos os termos pares de fibonnaci abaixo de ${param} é ${result}`;
}

export default somaTermosParesFibo;