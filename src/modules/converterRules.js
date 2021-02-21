import { Conversor } from "./conversor.js";
import { alertDivFunc } from "./alert.js";
import { transitionResult } from "./transition.js";

const convertButton = document.querySelector(".button");
const inputData = document.querySelector("input");

export function makeConvert() {

    let numBin;
    convertButton.addEventListener("click", () => {

        numBin = inputData.value;
        if (numBin.length > 7) {
            alertDivFunc("Max limit: 8 digits");
            return
        }

        if (isBinary(numBin)) {

            let conversor = new Conversor(numBin)
            transitionResult(conversor.converter());

        } else {

            alertDivFunc("Insert only binary numbers")
            return

        }


    })

}

function isBinary(numBin) {


    let isBinary;
    let strNum = numBin.toString();
    console.log(strNum)

    for (let i = 0; i < strNum.length; i++) {

        console.log(i)

        if (strNum[i] == 0 || strNum[i] == 1) {
            isBinary = true;
        }

        else {
            isBinary = false;
            return false;
        }
    }
    console.log(isBinary)
    return isBinary;
}