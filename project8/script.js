
let x = document.querySelector(".col");
x.addEventListener("click",fadRet);
function fadRet(){
    let y = document.querySelector(".fag")
    y.style.color = "blue"
    };








    function increaseSize(element) {
        element.style.width = element.offsetWidth * 2 + "px";
        element.style.height = element.offsetHeight * 2 + "px";
    };






    let but = document.querySelector(".cl");
    let value = 0;
    but.addEventListener("click",incr);
    function incr(){
        let tex = document.querySelector(".count");
        if(value<10){value++}
        tex.innerHTML = value;
    };






    let container = document.querySelector(".container");

    
    for (let i = 0; i < 10; i++) {
        let div = document.createElement("div");
        div.classList.add("box");
       // div.innerText = `Блок ${i + 1}`;
        container.appendChild(div);
    }

    let button = document.querySelector(".remove-btn");

    button.addEventListener("click", function () {
        let firstDiv = document.querySelector(".box"); 
        if (firstDiv) {
            firstDiv.remove(); 
        }
    });









    let contaner = document.querySelector(".block-container");

    contaner.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") { 
            alert(`Нажата ${event.target.innerText}`);
        }
    });





