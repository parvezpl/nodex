const cellxy=document.getElementById('grid');
let listx= [];
let g=1;
let cellWithxy=[];
let cellsNubmer=[];
let fb=[], fbR=[];


// column wise selection************************************************
function columnSelection(i,x,clickValue, tcellid,trget) {
     const selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
    if (!selectCell.value.length) {// if cell empty then enter
        
        // console.log("not",selectCell.id, "T",selectCell.value, clickValue); 
            } 
    if (selectCell.value.length) {
        fb.push(selectCell.value)
        let fbRn1=fb.filter((nu)=>(nu===clickValue))
        // console.log("fbRn",fbRn[1], tcellid);
        if (fbRn1[1]) {
            trget.value='';
        }
    }
}

// row wise selection************************************************
function rowSelection(x,i,clickValue, tcellid, trget){
    const selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
    if (!selectCell.value.length) {// if cell empty then enter    
        // console.log("not",selectCell.id, "T",selectCell.value, clickValue); 
            } 
    if (selectCell.value.length) {
        fbR.push(selectCell.value)
        let fbRn=fbR.filter((nu)=>(nu===clickValue))
        if (fbRn[1]) {
            trget.value='';
        }
    }
}



// x y genatare and pur to cell with x y
function cellXYgenrater(tcellid) {
    for (let i = 1; i <=9; i++) {
        for (let x = 1;  x <=9;x++) {
            if ((cellWithxy.length)<81) {
                cellWithxy.push({i,x});
                rowSelectionAllcell(i,x);
            }
            // console.log("new" ,cellWithxy.length);
        }    
    } 
}

// row wise selection all cell and push to************************************************
function rowSelectionAllcell(x,i){
    let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
    cellsNubmer.push(selectCell.id);
    // console.log(selectCell.id);
    // selectCell.value =i;
}

// cellXYgenrater()
// click event ..................................................
cellxy.addEventListener('input', function(e){
    const tcellid= e.target.id;
    const trget=e.target
    const tcellVelue=e.target.value;
    // targetCell(tcellid); // send cell id in function
    cellXYgenrater(tcellid)
    let c=cellWithxy[cellsNubmer.indexOf(tcellid)];
    xyPositonValue(c.i,c.x, tcellVelue, tcellid,trget);
    for (let numm = 1; numm <=9; numm++) {
        boxNumber(numm);
    }
    chakeBoxNumber(trget);
})


// cell x, y  position 
function xyPositonValue(x,y, tcellVelue, tcellid, trget) {
    for (let i = 1; i <=9; i++) {
        columnSelection(y,i, tcellVelue, tcellid, trget);
        rowSelection(x,i, tcellVelue, tcellid, trget);     
    }
    fb=[];
    fbR=[]; // for clean record num
    console.log(".........");
}


///////////////////////////////  up coplited

// down sinde start working ....................

let allCellNumber=[]; // all cells id store 
let pos=0 ;
let box1=[],box2=[],box3=[],
    box4=[],box5=[],box6=[],
    box7=[],box8=[],box9=[];


function chakeBoxNumber(trget) {
            allCellNumber.forEach((element) => {
            if (element.id==trget.id) {
                console.log("match",allCellNumber.indexOf(element));
                pos=allCellNumber.indexOf(element)
            }
            });

    if (pos<9) {
        console.log("box1------", trget.value);
        if (!box1.includes(trget.value)) {
            box1.push(trget.value)
        } else{ trget.value='';}

        // boxNumber(1);
    } else if(pos<18) {
        console.log("box2");
        console.log("box2------", trget.value);
        if (!box2.includes(trget.value)) {
            box2.push(trget.value)
        } else{ trget.value='';}
    } else if(pos<27) {
        console.log("box3");
        if (!box3.includes(trget.value)) {
            box3.push(trget.value)
        } else{ trget.value='';}
    } else if(pos<36) {
        console.log("box4");
        if (!box4.includes(trget.value)) {
            box4.push(trget.value)
        } else{ trget.value='';}
    }  else if(pos<45) {
        console.log("box5");
        if (!box5.includes(trget.value)) {
            box5.push(trget.value)
        } else{ trget.value='';}
    }  else if(pos<54) {``
        console.log("box6");
        if (!box6.includes(trget.value)) {
            box6.push(trget.value)
        } else{ trget.value='';}
    }  else if(pos<63) {
        console.log("box7");
        if (!box7.includes(trget.value)) {
            box7.push(trget.value)
        } else{ trget.value='';}
    } else if(pos<72) {
        console.log("box8");
        if (!box8.includes(trget.value)) {
            box8.push(trget.value)
        } else{ trget.value='';}
    } else if(pos<81) {
        console.log("box9");
        console.log("box1------", trget.value);
        if (!box9.includes(trget.value)) {
            box9.push(trget.value)
        } else{ trget.value='';}
    } 
}


let m, l;
function boxNumber(pr) {
    if (pr===1) {
        m=0; l=27;
    } else if (pr===2) {
        m=3; l=30;
    } else if (pr===3) {
        m=6; l=33;
    } else if (pr===4) {
        m=27; l=54;
    } else if (pr===5) {
        m=30; l=57;
    } else if (pr===6) {
        m=33; l=60;
    } else if (pr===7) {
        m=54; l=74;
    } else if (pr===8) {
        m=57; l=77;
    } else if (pr===9) {
        m=60; l=80;
    }
    boxWiseSelectioncell(m,l);
}

function boxWiseSelectioncell(s,e) {
    for (let i = 1; i <=9; i++) {
        for (let x = 1;  x <=9;x++) {
            listx.push({i,x});   
        }
    }
    for (let z = s; z < e; z++) { 
        for (let v = 0; v <3; v++) {
            boxSelection(listx[z+v].i, listx[z+v].x, g);
            g+=1;
        }
        z=z+8;     
    }
}

// main cell selection 
function boxSelection(x,i, n) {
    // console.log(`box ${x}, ${i}, ${n}`);
    let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
    if (allCellNumber.length<81) {
        allCellNumber.push(selectCell);
    }
    // selectCell.value =n ;

}

////..................................... work in progress ................................

// let listxx=[];
// function newboxWiseSelectioncell(s,e) {
//     for (let i = 1; i <=9; i++) {
//         for (let x = 1;  x <=9;x++) {
//             listxx.push({i,x});   
//         }
//     }
//     for (let z = s; z < e; z++) { 
//         for (let v = 0; v <3; v++) {
//             newboxSelection(listxx[z+v].i, listxx[z+v].x, g);
//             g+=1;
//         }
//         z=z+8;     
//     }
// }

function fillBox(params) {
    for (let i = 1; i <=9; i++) {
        for (let x = 1;  x <=9;x++) {
            newboxSelection(x,i,i)
            // listx.push({i,x});   
        }
    }

}
fillBox();

function newboxSelection(x,i, n) {
    // console.log(`box ${x}, ${i}, ${n}`);
    let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
    if (allCellNumber.length<81) {
        allCellNumber.push(selectCell);
    }
    selectCell.value =n ;
}


