
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
    let rot = z.value
    w.innerHTML = rot
    sessionStorage.setItem("storedText", rot);
     };






     
     
     
     let colorPic = document.getElementById("color");

document.body.style.backgroundColor = localStorage.getItem("bgColor") || "#ffffff";
colorPic.value = localStorage.getItem("bgColor") || "#ffffff";


colorPicker.addEventListener("input", () => {
    let selectedColor = colorPick.value;
    document.body.style.backgroundColor = selectedColor;
    localStorage.setItem("bgColor", selectedColor);
});




