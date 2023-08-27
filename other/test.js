
// testing 
// const list = {1:"aa", 2:"bb", 3:"cc", 4:"dd"}
// const list = [2, 3, 4, 5, 6, 7, 8, 9 ];
// const item1=[];
// list.forEach((element)=> {
//     item1.push(element);
// });


// for ( let i=0; i<item1.length; i++ ) {
//     if (item1[i]%2==0) {
//         console.log(item1[i]);
//     }
// }

// code for number increment

// for (let i = 0; i < list.length; i++) {
//     const element = list[i];
//     console.log(`for loop result : ${element}`);    
// }

// code for factorial solve

const num=document.getElementById("num");

const ln=10
let x1=1
for (let i = 1; i <=ln; i++) {
    console.log(`${x1}*${i}= ${i*x1}`);
    x1=x1*i;
}
console.log(x1);
num.innerHTML=x1;