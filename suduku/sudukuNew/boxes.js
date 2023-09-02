
let emptyCellslist=[];
function emptyCells(){
    emptyCellslist=[];
    for (let y = 1; y <=9; y++) {
        for (let x = 1; x <=9; x++) {
            let eacheCell=document.querySelector(`#grid > tbody > tr:nth-child(${y}) > td:nth-child(${x})`).lastChild
            let ctr=Boolean(eacheCell.value);
            console.log(ctr);
            if (!ctr) {
                emptyCellslist.push(eacheCell.id);
                emptys.textContent=emptyCellslist;
            }
        }
    } console.log(emptyCellslist);
}