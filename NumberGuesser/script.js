console.log("hello world");
const h2=document.getElementById('h2');
const input=document.querySelector('.input');
let inputHold=document.querySelector('.inputHold');
const p=document.createElement("p");


p.innerHTML="kya hal hai";

let add=[];
let allSum=0;

input.addEventListener("input",function(e){
    let d=e.data;
    inputHold.value='';
    let val=input.value;
    console.log(val);
    allSum=0;
    addNub(val);
    inHold(val);
    newAdder(val);
    
})

function addNub(val) {
    for (let i=0; i<=val; i++){
        add.push(`${i}+`);
        h2.innerHTML= `<p> Number Count <span> ${add}</span></p> `;  
    }
    add=[];
}


function inHold(val){
    for (let i=0; i<=val; i++){
        allSum+=i
        inputHold.value= allSum;
    }
    // 
    
}

function newAdder(val){
    allSum+=val;
}