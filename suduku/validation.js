const cellxy=document.getElementById('grid');
let listx= [];
let g=1;
let cellWithxy=[];
let cellsNubmer=[];
let fb=[], fbR=[];
let dft=false, cdft=false;

// cell x, y  position 
function xyPositonValue(trget) {

    let c=cellWithxy[cellsNubmer.indexOf(trget.id)];
    let x=c.i;
    let y=c.x;

    for (let i = 1; i <=9; i++) {
        let cl =columnSelection(y,i,trget);
        let rw =rowSelection(x,i, trget);
        console.log("cl, rw", cl, rw);
    }
    fb=[];
    fbR=[]; // for clean record num
    // console.log(".........");
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
        return false;
        // console.log("not",selectCell.id, "T",selectCell.value, clickValue); 
            } 
    if (selectCell.value.length) {
        fb.push(selectCell.value);
        let fbRn1=fb.filter((nu)=>(nu===clickValue))
        // console.log("fbRn",fbRn[1], tcellid);
        if (fbRn1[1]) {
            trget.value=''; 
            intervalue=0;
            return true;
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
    
    console.log(`selectCell: ${selectCell.value}, id: ${selectCell.id},click val ${clickValue}, saved ${intervalue}`);
    if (!selectCell.value.length) {// if cell empty then enter    
        // console.log("not",selectCell.id, "T",selectCell.value, clickValue); 
        return false;
    } 
    if (selectCell.value.length) {
        fbR.push(selectCell.value)
        let fbRn=fbR.filter((nu)=>(nu===clickValue))
        if (fbRn[1]) {
            trget.value='';
            console.log("return true");
            intervalue=0;
            return true;
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

// click event ..................................................
cellxy.addEventListener('input', function(e) {
    // console.log("clecked",e.target );
    stater(e.target);
    everyCell();
    intervalue=0;
});

function stater(trget, n) {
    // cellxy.addEventListener('input', function(e){
            // console.log("e value: ", trget);
            // const tcellid= e.target.id;
            // const tcellid= trget.id;
            // const trget=e.target
            // const tcellVelue=trget.value;
            cellXYgenrater()
            
            for (let numm = 1; numm <=9; numm++) {
                boxNumber(numm);
            }
        // send cell id in function

            let xy=xyPositonValue(trget); //  if true
            let ck=chakeBoxNumber(trget); // if true
            // console.log("xy", xy, "ck", trget.id, ck)
            if (intervalue) {
                if (intervalue==trget.value) {
                // trget.value=n;
            }
            
        
        
            if (n) {
            if (xy) { console.log("nn----"); 
                if (ck) {
                    console.log("not macht", n);
                    // trget.value=n;
                }
            }       // then work with
        }
            
        }    
        // )}

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
                // console.log("match",allCellNumber.indexOf(element));
                pos=allCellNumber.indexOf(element)
            }
            });

            if (pos<9) { // console.log("box1");
                if (!box1.includes(trget.value)) {
                    console.log(pos,"posssss", box1);
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
                    console.log("id",trget.id, "v",trget.value, "ps", pos);
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



// function fillBox(params) {
//     for (let i = 1; i <=9; i++) {
//         for (let x = 1;  x <=9;x++) {
//             newboxSelection(i,x,i)
//         }
//     }

// }

// function newboxSelection(x,i, n) {
//     let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
//     if (allCellNumber.length<81) {
//         allCellNumber.push(selectCell);
//     }
//     // selectCell.value =n ;

//     //............... looking for data ..................
//     if (selectCell.value) {
        
//     }
//     console.log("value",selectCell.value);
// }

const numberNew=[1,2,3,4,5,6,7,8,9];
function everyCell(params) {
        for (let index = 1; index <=9; index++) {
            for (let r = 1; r <=9; r++) {
                for (let n = 1; n <=9; n++) {
                    let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${index}) > td:nth-child(${r})`).lastChild
                    // console.log("val",selectCell, selectCell.value); 
                    if (!selectCell.value) {
                        // console.log("send",selectCell.id, n);
                        stater(selectCell, n);
                        // console.log("s",s);
                        // selectCell.value=n;
                    } else {
                        // stater(selectCell);
                    }
        
                }
            }
        }    
}    
