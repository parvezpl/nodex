
// input event ..................................................
cellxy.addEventListener('input', function(e) {
    stater(e.target);
    intervalue=0;
    sudu=false;
    blockedCell(e.target);
    
});

function blockedCell(trCell) {
    console.log(trCell.value);
    trCell.style.backgroundColor="red";
    trCell.disabled = true;
}


// dbclick buto event...................... 
cellxy.addEventListener('dblclick', function(e) {
    console.log(e.target, intervalue);
    e.target.value='';
    intervalue=0;
    e.target.disabled = false;
    e.target.style.backgroundColor='white';
    box1=[],box2=[],box3=[], // cleaner 
    box4=[],box5=[],box6=[],
    box7=[],box8=[],box9=[];

})

//click botton event................................

click.addEventListener('click', function(e) {
    for (let n = 1; n <=9; n++) {
        everyCell(n)
    }

    intervalue=0;
})

let numck=document.getElementById('num-0');
numck.addEventListener('click', function(e) {
    everyCell(e.target.value)
    // intervalue=0;
})

const chake=document.getElementById('chake');
const emptys=document.getElementById('empty');

chake.addEventListener('click', function(e) {
    emptyCells(e.target);
    console.log("empty");
})
// emptys.innerHTML='10';
