
let x = document.querySelector(".adp");
let y = document.querySelector(".adstor");
let z = document.querySelector(".tex");
let w = document.querySelector(".gopa");

x.addEventListener("click",adVal);
function adVal(){
    let rt = z.value
    w.innerHTML = rt
    
};

y.addEventListener("click",adVa);
function adVa(){
    
    w.innerHTML = ""
    
};



