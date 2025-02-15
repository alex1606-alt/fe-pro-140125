
let x = document.querySelector(".col");
x.addEventListener("click",fadRet);
function fadRet(){
    let y = document.querySelector(".fag")
    y.style.color = "blue"
    };



    function increaseSize(element) {
        element.style.width = element.offsetWidth * 2 + "px";
        element.style.height = element.offsetHeight * 2 + "px";
    }

