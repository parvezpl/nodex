const cell4=document.getElementById('cell-3');
const cell5=document.getElementById('cell-4');
const cell6=document.getElementById('cell-5');
const cell13=document.getElementById('cell-12');
const cell14=document.getElementById('cell-13');
const cell15=document.getElementById('cell-14');
const cell22=document.getElementById('cell-21');
const cell23=document.getElementById('cell-22');
const cell24=document.getElementById('cell-23');

//Box SECOUND cell number inter

cell4.addEventListener('input', function(e){
    let cell2Num=parseInt(e.data);
    twoCleaner(cell2Num);
    box2NumGen(cell2Num);


})//end cell

// box one function
function validation(cell2Num){
    // if (cell2Num===cell2.value || cell2Num===cell3.value || cell2Num===cell10.value || cell2Num===cell11.value || cell2Num===cell12.value || cell2Num===cell19.value || cell2Num===cell20.value || cell2Num===cell21.value );
    //     console.log("match number");
    
// if (cell2Num===cell2.value || cell2Num===cell3.value 
//     || cell2Num===cell10.value || cell2Num===cell11.value || cell2Num===cell12.value || cell2Num===cell19.value 
//     || cell2Num===cell20.value || cell2Num===cell21.value) {
//     console.log("match number")
// } else {


    
// }
} //end

let box2NumArray =[];
const twocells = [cell4,cell5, cell6, cell13, cell14, cell15, cell22, cell23, cell24];
function box2NumGen(cell2Num){
    for (let i = 1; i <=10; i++) {
        if (i ===cell2Num) {continue;};
        
        box2NumArray.push(i);
        box2Filing(box2NumArray);
    // boxOne cell filling function

}
     }//end function
function box2Filing(numList){
    for (let i = 1; i < numList.length; i++) {
        twocells[i].value=numList[i-1];
    }

}

function twoCleaner(num){
     box2NumArray =[];
}






// let text = "";
// let ary =[];
// for (let i = 0; i < 10; i++) {
//     if (i === 3) { continue; }
//     text += i;
//     ary.push(i);
//   }
// console.log(text);
// console.log(ary);


    // if ((parseInt(cell1.value))===2){
    //     cell2.value=1;
    //     cell3.value=3;
    //     cell10.value=4;
    //     cell11.value=5;
    //     cell12.value=6;
    //     cell19.value=7;
    //     cell20.value=8;
    //     cell21.value=9;

//     // box one function
// function numValiation(cellNum){
//     for (let x = 1; x <= 8; x++) {
        
//     }

//     if (             
//         cellNum === parseInt(oneCells[x].value) ||
//         cellNum === parseInt(cell3.value) ||
//         cellNum === parseInt(cell4.value) ||
//         cellNum === parseInt(cell5.value) ||
//         cellNum === parseInt(cell6.value) ||
//         cellNum === parseInt(cell7.value) ||
//         cellNum === parseInt(cell8.value) ||
//         cellNum === parseInt(cell9.value) )
//          {
//             alert("Number match");
//             cellCleaner(cellNum);

//     } else {
//         if (cellNum===false) {
            
//         }
        
//         boxOneNumGen(cellNum);

//     }