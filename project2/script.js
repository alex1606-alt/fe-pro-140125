let x = prompt("введите число");
let y = prompt("введите число");
let z = prompt("введите число");

if(x>y && x>z){console.log(`наибольшее число ${x}`)};
if(y>x && y>z){console.log(`наибольшее число ${y}`)};
if(z>x && z>y){console.log(`наибольшее число ${z}`)};




let nm = prompt("введіть номер місяця 1-12");
if(nm>4 && nm<10){console.log(`теплий сезон`)};
if(nm<=4 || nm>=10){console.log(`холодний сезон`)};



let tyr = prompt("введите число");
if(tyr<0){console.log(`число${tyr} отрицательное`)};
if(tyr>0){console.log(`число${tyr} положительное`)};
if(tyr==0){console.log(`число${tyr} есть зеро`)};


let bn = prompt("введіть величину кута в градусах");
bn<90 ? console.log(`кут гострий`) : console.log(`кут тупой`);





let fag = prompt("назва геометричной фігури");
switch (fag){
    case "коло":alert("коло має 0 сторін")
    break;
    case "квадрат":alert("квадрат має 4 сторони")
    break;
    case "трикутник":alert("трикутник має 3 сторони")
    break;

};






let nym = 0;
let sv = 0;
do{if(nym % 2 === 0){sv=sv+nym}
nym++;

}while(nym<21);
console.log(sv);





for(i=0;i<11;i++){console.log(`5*${i}`)};






















