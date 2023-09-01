const cellxy=document.getElementById('grid');
const click=document.getElementById('click');

let listx= [];
let g=1;
let cellWithxy=[];
let cellsNubmer=[];
let fb=[], fbR=[];
let dft=false, cdft=false;
let sudu= false;

// cell x, y  position 
function xyPositonValue(trget) {
    
    let c=cellWithxy[cellsNubmer.indexOf(trget.id)];
    let x=c.i;
    let y=c.x;

    for (let i = 1; i <=9; i++) {
        let cl =columnSelection(y,i,trget);
        let rw =rowSelection(x,i, trget);
    }
    fb=[];
    fbR=[]; // for clean record num
}

let intervalue=0;
// column wise selection************************************************
function columnSelection(i,x, trget) {
    let clickValue =trget.value;
    if (!intervalue) {
        intervalue=clickValue;
    }
     const selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
    if (!selectCell.value.length) {// if cell empty then enter
        if (trget.n) {
        }
        sudu= false;
            } 
    if (selectCell.value.length) {
        fb.push(selectCell.value);
        let fbRn1=fb.filter((nu)=>(nu===clickValue))
        // console.log("fbRn",fbRn[1], tcellid);
        if (fbRn1[1]) {
            trget.value=''; 
            intervalue=0;
            // everyCell();// return to click number s.........
            sudu= true;
        }
    } 
}

// row wise selection************************************************
function rowSelection(x,i,trget){
    
    let clickValue=trget.value;
    if (!intervalue) {
        intervalue=clickValue;
    }
    const selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
    if (!selectCell.value.length) {// if cell empty then enter    
        sudu= false;
    } 
    if (selectCell.value.length) {
        fbR.push(selectCell.value)
        let fbRn=fbR.filter((nu)=>(nu===clickValue))
        if (fbRn[1]) {
            trget.value='';
            intervalue=0;
            sudu= true;
        }
    } 
}



// x y genatare and pur to cell with x y
function cellXYgenrater() {
    for (let i = 1; i <=9; i++) {
        for (let x = 1;  x <=9;x++) {
            if ((cellWithxy.length)<81) {
                cellWithxy.push({i,x});
                rowSelectionAllcell(i,x);
            }
        }    
    } 
}

// row wise selection all cell and push to************************************************
function rowSelectionAllcell(x,i){
    let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
    cellsNubmer.push(selectCell.id);

}


function stater(trget) {
         
            cellXYgenrater()
            for (let numm = 1; numm <=9; numm++) {
                boxNumber(numm);
            }

            xyPositonValue(trget); //  if true
            chakeBoxNumber(trget); // if true
    }



//................................................................
let allCellNumber=[]; // all cells id store 
let pos=0 ;
let box1=[],box2=[],box3=[],
    box4=[],box5=[],box6=[],
    box7=[],box8=[],box9=[];

function chakeBoxNumber(trget) {
           
            allCellNumber.forEach((element) => {
            if (element.id==trget.id) {
                // console.log("match",allCellNumber.indexOf(element));
                pos=allCellNumber.indexOf(element)
            }
            });

            if (pos<9) { // console.log("box1");
                if (!box1.includes(trget.value)) {
                    box1.push(trget.value);
                    return false;
                } else{ trget.value=''; return true; }
                // boxNumber(1);
            } else if (pos>8 && pos<18) {
                // console.log("box2");
                if (!box2.includes(trget.value)) {
                    box2.push(trget.value);
                } else{ trget.value=''; return true;}
            } else if(pos>17 && pos<27) {
                // console.log("box3");
                if (!box3.includes(trget.value)) {
                    box3.push(trget.value)
                } else{ trget.value=''; return true;}
            } else if(pos>26 &&pos<36) {
                // console.log("box4");
                if (!box4.includes(trget.value)) {
                    box4.push(trget.value)
                } else{ trget.value=''; return true;}
            }  else if(pos>35 &&pos<45) {
                // console.log("box5");
                if (!box5.includes(trget.value)) {
                    box5.push(trget.value)
                } else { trget.value=''; return true;}
            }  else if(pos>44 &&pos<54) {
                // console.log("box6");
                if (!box6.includes(trget.value)) {
                    box6.push(trget.value)
                } else { trget.value=''; return true;}
            }  else if(pos>53 &&pos<63) {
                // console.log("box7");
                if (!box7.includes(trget.value)) {
                    box7.push(trget.value)
                } else { trget.value=''; return true;}
            } else if(pos>62 &&pos<72) {
                // console.log("box8");
                if (!box8.includes(trget.value)) {
                    box8.push(trget.value)
                } else { trget.value=''; return true;}
            } else if(pos>71 &&pos<81) {
                // console.log("box9");
                if (!box9.includes(trget.value)) {
                    box9.push(trget.value)
                    // console.log("id",trget.id, "v",trget.value, "ps", pos);
                } else { trget.value=''; return true;}
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
    let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
    if (allCellNumber.length<81) {
        allCellNumber.push(selectCell);
    }

}


