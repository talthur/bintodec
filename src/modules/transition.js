import { makeConvert } from "./converterRules.js";

const bodyDocument = document.querySelector("body");
const convertButton = document.querySelector(".button");
const inputData = document.querySelector("input");
const originalHTML = `<div class="transition"></div>

<main>
    <input type="text" placeholder="Insert Binary..." class="input">
    <button class="button">Convert</button>
</main>

<div class="alert-inserter">
</div>`;


export function transitionResult(numDec) {

    bodyDocument.id = "black-body";
    let resultDiv = `<div class="box-result">
    <p>${numDec}</p>;
</div>`
    bodyDocument.innerHTML = resultDiv;
    let restartButton = document.querySelector(".box-result");
    restartButton.addEventListener("click", () => {

        document.location.reload(true)

    })
}