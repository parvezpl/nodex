// const cellxy=document.getElementById('grid');
// let listx= [];
// let g=1;
// let cellWithxy=[];
// let cellsNubmer=[];

// function columnSelection(i,x){
//      let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
//      selectCell.value =x;
// }
// // row wise selection************************************************
// function rowSelection(x,i){
//     let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
//     selectCell.value =i;
// }

// // x y genatare and pur to cell with x y
// function cellXYgenrater(tcellid) {
//     for (let i = 1; i <=9; i++) {
//         for (let x = 1;  x <=9;x++) {
//             if ((cellWithxy.length)<81) {
//                 cellWithxy.push({i,x});
//                 rowSelectionAllcell(i,x);
//             }
//             // console.log("new" ,cellWithxy.length);
//         }    
//     } 
// }

// // row wise selection all cell and push to************************************************
// function rowSelectionAllcell(x,i){
//     let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
//     cellsNubmer.push(selectCell.id);

// }

// // cellXYgenrater()
// // click event ..................................................
// cellxy.addEventListener('input', function(e){
//     const tcellid= e.target.id;
//     const tcellVelue=e.target.value;
//     // targetCell(tcellid); // send cell id in function
//     cellXYgenrater(tcellid)
//     let c=cellWithxy[cellsNubmer.indexOf(tcellid)];
//     console.log("cell",tcellid,tcellVelue, c);
//     xyPositonValue(c.i,c.x);

// })


// // cell x, y  position 
// function xyPositonValue(x,y) {
//     for (let i = 1; i <=9; i++) {
//         columnSelection(y,i);
//         rowSelection(x,i);     
//     }
// }
