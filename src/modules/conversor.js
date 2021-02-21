
export class Conversor{
    constructor(numBin){
        this.numBin = numBin;
    }

    converter(){

        let totalDec = 0;
        let strNumBin = String(this.numBin)
        let counter = 0;


        for (let i = strNumBin.length - 1; i>= 0; i--){
            let number = parseInt(strNumBin[i]);
            let partialDec = number * (2 ** counter);
            totalDec += partialDec;
            counter++;
        }
        return totalDec
    }
}