// const cell22 =document.getElementById("cell-2");
let ccell=document.querySelector(`#grid > tbody > tr:nth-child(1) > td:nth-child(1)`);
// ccell.value = 2;
// console.log(ccell.getElementById('cell-0')) ;
ccell.value = 5;

const allcell=document.getElementById('grid');

let numbers;

allcell.addEventListener('input', function(e){
    console.log(e.target.id);
    const tcell= e.target.id
    targetCell(tcell)
    boxFilling();
    console.log(ccell.value,"cellValue");
})

function targetCell(cell){
    if(cell=='cell-0'){
        console.log(cell,"target cell");    
        nuberGenrater()


    }

}


function nuberGenrater(){
    numbers=[];
    for(i=1; i<=9; i++){
        numbers.push(i)
    };
}


// box filling 

function boxFilling(){
    for(i=1; i<=9; i++){
        for (let x = 1; x <=9; x++) {
            let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`)
            realFill(selectCell);
        };

 };
}

function realFill(cells){
    cells.value=1;
    // console.log(cells);
}

// boxFilling();


