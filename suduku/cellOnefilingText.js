
const cellxy=document.getElementById('grid');

cellxy.addEventListener('input', function(e){
    cellXYgenrater(e.target.id);

    if (e.target.value) {
        let clk=e.target;
        // everyCell(clk);
        xyPositonValue(clk);
    } else {
        
    }
})


const numberNew=[1,2,3,4,5,6,7,8,9];
let boxAndCell=[];
let sudu=false;
let fb=[], fbR=[];

function everyCell(clk) {
        let n=clk.value
        boxAndCell=[];
        for (let index = 1; index <=9; index++) {
            for (let r = 1; r <=9; r++) {
                let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${index}) > td:nth-child(${r})`).lastChild;
                let tr= Boolean(selectCell.value);
                if (!tr) { // if cell me vallu not ablavle ............
                    chkRowVal(selectCell,n, clk);
                    console.log(`suduku: ${sudu}, ${n}`);
                    if (sudu) {
                        sudu=false;
                        console.log(`suduku: ${sudu}, ${selectCell.id}`);
                        continue;

                    } 
                    if (!sudu) {
                        // console.log(r, index);
                    }
                    
                } sudu=false;

            } 
        }  
}


//......... row chake ...........

function chkRowVal(trg,n,clk) {
    // console.log(`id ${selectCell.id}, n: ${n}`);  
            for (let r = 1; r <=9; r++) {
                let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${1}) > td:nth-child(${r})`).lastChild
                let val=Boolean(selectCell.value);
                if (val) {
                    if (clk.id!=selectCell.id) {
                        console.log("id", selectCell.id);
                        if (selectCell.value===clk.value) {
                                sudu=true;
                                clk.value='';
                                console.log(`id: ${selectCell.id},val: ${selectCell.value}, n:${n}`);
                            }
                    }
                    
                }//
                
            }
}






////////////////////////////////


let listx= [];
let g=1;
let cellWithxy=[];
let cellsNubmer=[];

// cellXYgenrater()
// click event ..................................................
cellxy.addEventListener('inputtt', function(e){
    const tcellid= e.target.id;
    const trget=e.target;
    cellXYgenrater(tcellid)
    xyPositonValue(trget);

})


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

}


// cell x, y  position 
function xyPositonValue(trget) {
    let c=cellWithxy[cellsNubmer.indexOf(trget.id)];
    let x=c.i;
    let y=c.x;
    for (let i = 1; i <=9; i++) {
        columnSelection(y,i, trget);
        rowSelection(x,i, trget);     
    }
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
            // selectCell.value = trget.n;
        }
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
            // everyCell();// return to click number s.........
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
    
    // console.log(`selectCell: ${selectCell.value}, id: ${selectCell.id},click val ${clickValue}, saved ${intervalue}`);
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

// input event ..................................................
cellxy.addEventListener('input', function(e) {
    // console.log("clecked",e.target );
    // stater(e.target);
    everyCell();
    intervalue=0;
});



