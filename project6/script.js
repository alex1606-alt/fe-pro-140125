

 function choiz(){
    let x = prompt("выбирай- камень,ножницы или бумага").trim();
    let y = ["камень","ножницы","бумага"] ;
    let z = y[Math.floor(Math.random() * y.length)];
    if(x === z){alert("ничья")}
    else if(x === "камень"&& z === "ножницы"){console.log("ты выиграл")}
    else if(x === "камень"&& z === "бумага"){console.log("ты проиграл")}
    else if(x === "ножницы"&& z === "камень"){console.log("ты проиграл")}
    else if(x === "ножницы"&& z === "бумага"){console.log("ты выиграл")}
    else if(x === "бумага"&& z === "ножницы"){console.log("ты проиграл")}
    else if(x === "бумага"&& z === "камень"){console.log("ты выиграл")}
    };
 choiz();








 function chek(a,d,c,d){
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);
};
  chek("fagot",true,"13",8);









  function midl(...numbers) {
    if (numbers.length === 0) return 0; 
    return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
};
console.log(midl(1, 2, 3, 4, 5)); 
console.log(midl()); 
