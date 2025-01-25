
function calculator (x,y,operator){
    switch(operator){
        case "+":alert(`${x+y}`)
        break;
        case "-":alert(`${x-y}`)
        break;
        case "*":alert(`${x*y}`)
        break;
        case "/":alert(`${x/y}`)
        break;



    }
};
calculator(2,5,"*");





function find (){
    for(i=1;i<11;i++){if(i%2==0){alert(i); break}};

};
find();






function finde (){
    for(i=1;i<11;i++){if(i%2!==0){continue;}
        alert(i); }};
finde();






let gerArray =[
    ["tom","email",24],
    ["bob","email",33],
    ["ken","email",44],
];

function hiUser(user){
    console.log(`вітаю ${user}`);
};
function welcomUser(array){
    for(i=0;i<array.length;i++){hiUser(array[i])};
};
welcomUser(gerArray);






let secArray=[
    ["nik",55],
    ["vania",44],
    ["masha",33]
];
function hiUs(us){
    console.log(`вітаю ${us}`)};


    function welcomUs(array,his){
        for(i=0;i<array.length;i++){his(array[i])};
    };
    welcomUs(secArray,hiUs);




