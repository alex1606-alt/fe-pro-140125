let garArray= new Array();
console.log(garArray);
garArray.push("cat");
garArray.push(5);
console.log(garArray);



let kaArray=[1,2,2];
kaArray.push(7,6);
console.log(kaArray);





let x = [3,5,7];
let y = "vika";
function soha (Arr,el){
    let z = Arr.push(el);
    console.log(z);
};
soha(x,y);
console.log(x);







let vf = [3,5,6,7,1];
vf.pop();
console.log(vf);




let zx = [1,3,4,5];
function vab(ra){
    ra.pop();
};
vab(zx);
console.log(zx);






let rot = [1,3,4];
rot.unshift(5,7);
console.log(rot);



let fh = 5;
let er = 7;
function dasa(tp,v,b){
    tp.unshift(v,b);
};
dasa(rot,fh,er);
console.log(rot);





rot.shift();
console.log(rot);
rot.shift();
console.log(rot);
rot.shift();
console.log(rot);




function del(gh){
    gh.shift();
};
del(rot);
console.log(rot);





let pot = new Array(10);
console.log(pot);
pot.fill(0);
console.log(pot);


rot.fill(0);
console.log(rot);




let w = 7;
let ind1 = 1;
let ind2 = 3;
function bot(ari,g,n,m){
    ari.fill(g,n,m);
};
bot(pot,w,ind1,ind2);
console.log(pot);




pot.reverse();
console.log(pot);


function veb(arrra){
    arrra.reverse();
};
veb(pot);
console.log(pot);



let tyr = [1,2,3,4,5];
let tor = [6,7,8,9,10];
let vyr = tyr.concat(tor);
console.log(vyr);



function togeze(ril,fel){

    let h = ril.concat(fel);
    console.log(h);
};
togeze(tyr,tor);





console.log(vyr.includes(11));
console.log(vyr.includes(3));




let r = 44;
function chek(arrrr,cv){
    console.log(arrrr.includes(cv));
};
chek(vyr,r);





function chekOut(ert){
    return ert > 7;

};
function cheng(zxc,gan){
    let torino = zxc.filter(gan);
    console.log(torino);
    };
    cheng(vyr,chekOut);




 function side (ger) {
    let newAr = ger.filter((numer)=>numer % 2 ===0);
    console.log(newAr);
 };
 side(vyr);






 vyr.forEach((nama)=>{console.log(nama)});





 let newMpAra = vyr.map((nam)=>{
    return(`${nam**2}`);
 });

 console.log(newMpAra);







 function chehger (rani){
    let nwAra = rani.map((boni)=>{
        return(`string${boni}`)
         });
    console.log(nwAra)
 };
 chehger(vyr);
 































