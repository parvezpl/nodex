const cell1=document.getElementById('cell-0');
const cell2=document.getElementById('cell-1');
const cell3=document.getElementById('cell-2');
// const cell4=document.getElementById('cell-3');
// const cell5=document.getElementById('cell-4');
// const cell6=document.getElementById('cell-5');
const cell7=document.getElementById('cell-6');
const cell8=document.getElementById('cell-7');
const cell9=document.getElementById('cell-8');
const cell10=document.getElementById('cell-9');
const cell11=document.getElementById('cell-10');
const cell12=document.getElementById('cell-11');
// const cell13=document.getElementById('cell-12');
// const cell14=document.getElementById('cell-13');
// const cell15=document.getElementById('cell-14');
const cell16=document.getElementById('cell-15');
const cell17=document.getElementById('cell-16');
const cell18=document.getElementById('cell-17');
const cell19=document.getElementById('cell-18');
const cell20=document.getElementById('cell-19');
const cell21=document.getElementById('cell-20');
// const cell22=document.getElementById('cell-21');
// const cell23=document.getElementById('cell-22');
// const cell24=document.getElementById('cell-23');
const cell25=document.getElementById('cell-24');
const cell26=document.getElementById('cell-25');
const cell27=document.getElementById('cell-26');
const cell28=document.getElementById('cell-27');
const cell29=document.getElementById('cell-28');
const cell30=document.getElementById('cell-29');
const cell31=document.getElementById('cell-30');
const cell32=document.getElementById('cell-31');
const cell33=document.getElementById('cell-32');
const cell34=document.getElementById('cell-33');
const cell35=document.getElementById('cell-34');
const cell36=document.getElementById('cell-35');
const cell37=document.getElementById('cell-36');
const cell38=document.getElementById('cell-37');
const cell39=document.getElementById('cell-38');
const cell40=document.getElementById('cell-39');
const cell41=document.getElementById('cell-40');
const cell42=document.getElementById('cell-41');
const cell43=document.getElementById('cell-42');
const cell44=document.getElementById('cell-43');
const cell45=document.getElementById('cell-44');
const cell46=document.getElementById('cell-45');
const cell47=document.getElementById('cell-46');
const cell48=document.getElementById('cell-47');
const cell49=document.getElementById('cell-48');
const cell50=document.getElementById('cell-49');
const cell51=document.getElementById('cell-50');
const allbox=document.getElementById('grid');


// globle variabler.................................................................
let boxOneNumList =[];
const oneCells = [cell1,cell2, cell3, cell10, cell11, cell12, cell19, cell20, cell21];
const oneCellsValue = [cell1.value,cell2.value, cell3.value,
                     cell10.value, cell11.value,cell12.value,
                     cell19.value, cell20.value, cell21.value];

let workingCellNumber=0;




// Event listeners.................................................................

allbox.addEventListener( 'input', function(e) {
    // console.log(e.target.value);
    // console.log(e.target.id);
    validateOneBox();

});


// chacke validation.................................................................

function validateOneBox(event) {


}

function validateOneRow(event) {


}


function validateOneColunm(event) {


}



// box one cell filing.................................................................

function BoxOneCellsfilling(event) {

}

// box one clearer.................................................................

function BoxOneCleaner(event) {

}

// cell  clearer.................................................................

function cellCleaner(event) {
    allbox.addEventListener( 'input', function(e) {
        console.log(e.target.value);



    }
    )
}
