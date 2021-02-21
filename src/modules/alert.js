const body = document.querySelector("body");
const alertInserter = document.querySelector(".alert-inserter");

export function alertDivFunc(msg) {

//     const alertDiv = `<div class="alert">
// <p>Max limit: <b>8 digits</b></p>
// </div>`

    alertInserter.innerHTML = `<p>${msg}</p>`;
    alertInserter.className = "alert";
    setTimeout(() => {  
        
        alertInserter.className = "alert-inserter"
        alertInserter.textContent = '' }, 2000)
    
}
