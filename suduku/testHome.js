// let ccell=document.querySelector(`#grid > tbody > tr:nth-child(1) > td:nth-child(1)`);
// ccell.value = 2;
// console.log(ccell.lastChild.id);
// ccell.value = 5;
// ccell.lastChild.style.backgroundColor ='red';

const allcell=document.getElementById('grid');
const filledCell=[];
const allcellid =[];
let numbers;

const num=[1,2,3,4,5,6,7,8,9];
let remaing=[];
const newNum=[];

allcell.addEventListener('input', function(e){
    const tcellid= e.target.id;
    targetCell(tcellid); // send cell id in function
    boxFillinNuberGenrater(tcellid);
    cellLock(e.target);
    let cellnum= Number(e.target.value)

    let cn=newNum.filter((num)=>(num===cellnum))[0];
    if (!cn) {
        let nn= num.filter((num1)=>(num1===cellnum))[0];
        if (nn) { const spn=num.splice(num.indexOf(nn), 1); 
            newNum.push(spn[0]);
        }
        console.log(cn, 'cn');
    }

    
    console.log(newNum);
    console.log(num);


    // firstBoxFilling();
    // secoundtBoxFilling();
    // thirdtBoxFilling();
    // fourthtBoxFilling();
    // fifthtBoxFilling();
    // sixthtBoxFilling();
    // seventhtBoxFilling();
    // eitthtBoxFilling();
    // ninethtBoxFilling();
    // console.log(tcellid);
    // console.log(allcellid); 
})

function targetCell(tcellid){
    if(tcellid!='cell-0'){
        nuberGenrater()    
    }
}

function nuberGenrater(){
    numbers=[];
    for(i=1; i<=9; i++){
        numbers.push(i)
    };
}

function rowWiseIdGenrater(x,i){
    let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
    allcellid.push(selectCell.id);
}


// box filling ========================================
function boxFillinNuberGenrater(tcellid){
    for(i=1; i<=9; i++){
        for (let x = 1; x <=9; x++) {
            rowWiseIdGenrater(i,x);


// all cell selected methods for condition ===========================
            // columnSelection(i, x);
            // rowSelection(i, x);
            // boxSelection(i, x);

        };
    };
}

//------------------------------------------------------------------------------
// column wise selection************************************************
function columnSelection(i,x){
    // console.log("i:", i,"x",x);
    let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
    console.log(selectCell.id);
    selectCell.value =x
}


// row wise selection************************************************
function rowSelection(){
    let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
    console.log(selectCell.id);
    selectCell.value =i
}






function boxSelection(x,i, n) {
    let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${x}) > td:nth-child(${i})`).lastChild
    selectCell.value =n   
}


// cell lock
function cellLock(id){
    id.style.backgroundColor ='gray'
    id.disabled = true;
    filledCell.push(id);
    //console.log(filledCell,"click on cell lock");
}

function cellCleaner(params) {
    
}




// box wise selection************************************************
let list=[]; // cell i*x collection
let box1cells=[],box2cells=[],box3cells=[],box4cells=[],box5cells=[],box6cells=[],box7cells=[],box8cells=[],box9cells=[];
let list3=[]; // cell object list
let list9=[]; // 9 box-wise selection
let box=[];
let n=1, n1=1, n2=1, n3=1, n4=1, n5=1, n6=1, n7=1, n8=1;
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// firstbox filing
function firstBoxFilling() {
        for (let i = 1; i <=9; i++) {
            for (let x = 1;  x <=9;x++) {
                list.push({i,x});   
            }
        }
        for (let z = 0; z < 27; z++) { 
            for (let v = 0; v <3; v++) {
                // console.log(z+v);
                // list9.push(list[z+v]);
                // console.log(list[z+v]);
                boxSelection(list[z+v].i, list[z+v].x, n);
                box1cells.push(list[z+v].i, list[z+v]);
                n+=1;
            }
            z=z+8;     
        }
}

// secound tbox filing
function secoundtBoxFilling() {
        for (let i = 1; i <=9; i++) {
            for (let x = 1;  x <=9;x++) {
                list.push({i,x});   
            }
        }

        for (let z = 3; z < 30; z++) {
            
            for (let v = 0; v <3; v++) {

                boxSelection(list[z+v].i, list[z+v].x, n1);
                box2cells.push(list[z+v].i, list[z+v]);
                n1+=1;
            }
            z=z+8;     
        }

}
// third tbox filing
function thirdtBoxFilling() {
        for (let i = 1; i <=9; i++) {
            for (let x = 1;  x <=9;x++) {
                list.push({i,x});   
            }
        }

        for (let z = 6; z < 33; z++) {
            
            for (let v = 0; v <3; v++) {
                boxSelection(list[z+v].i, list[z+v].x, n2);
                box3cells.push(list[z+v].i, list[z+v]);
                n2+=1;
            }
            z=z+8;     
        }
       
}
// fourth tbox filing
function fourthtBoxFilling() {
        for (let i = 1; i <=9; i++) {
            for (let x = 1;  x <=9;x++) {
                list.push({i,x});   
            }
        }
        for (let z = 27; z < 54; z++) {
            
            for (let v = 0; v <3; v++) {
                boxSelection(list[z+v].i, list[z+v].x, n3);
                box4cells.push(list[z+v].i, list[z+v]);
                n3+=1;
            }
            z=z+8;     
        }
       
}
// fifth tbox filing
function fifthtBoxFilling() {
        for (let i = 1; i <=9; i++) {
            for (let x = 1;  x <=9;x++) {
                list.push({i,x});   
            }
        }
        for (let z = 30; z < 57; z++) {
            
            for (let v = 0; v <3; v++) {
                boxSelection(list[z+v].i, list[z+v].x, n4);
                box5cells.push(list[z+v].i, list[z+v]);
                n4+=1;
            }
            z=z+8;     
        }
       console.log(box5cells," box5cells");
}


// sixth tbox filing
function sixthtBoxFilling() {
        for (let i = 1; i <=9; i++) {
            for (let x = 1;  x <=9;x++) {
                list.push({i,x});   
            }
        }
        for (let z = 33; z < 60; z++) {
            
            for (let v = 0; v <3; v++) {
                boxSelection(list[z+v].i, list[z+v].x, n5);
                box6cells.push(list[z+v].i, list[z+v]);
                n5+=1;
            }
            z=z+8;     
        }
       console.log("box6cells");
}

// seventh tbox filing
function seventhtBoxFilling() {
        for (let i = 1; i <=9; i++) {
            for (let x = 1;  x <=9;x++) {
                list.push({i,x});   
            }
        }
        for (let z = 54; z < 74; z++) {
            
            for (let v = 0; v <3; v++) {
                boxSelection(list[z+v].i, list[z+v].x, n6);
                box7cells.push(list[z+v].i, list[z+v]);
                n6+=1;
            }
            z=z+8;     
        }
       
}
// eitth tbox filing
function eitthtBoxFilling() {
        for (let i = 1; i <=9; i++) {
            for (let x = 1;  x <=9;x++) {
                list.push({i,x});   
            }
        }
        for (let z = 57; z < 77; z++) {
            
            for (let v = 0; v <3; v++) {
                boxSelection(list[z+v].i, list[z+v].x, n7);
                box8cells.push(list[z+v].i, list[z+v]);
                n7+=1;
            }
            z=z+8;     
        }
       
}
// nineth tbox filing
function ninethtBoxFilling() {
        for (let i = 1; i <=9; i++) {
            for (let x = 1;  x <=9;x++) {
                list.push({i,x});   
            }
        }
        for (let z = 60; z < 80; z++) {
            
            for (let v = 0; v <3; v++) {
                boxSelection(list[z+v].i, list[z+v].x, n8);
                box9cells.push(list[z+v].i, list[z+v]);
                n8+=1;
            }
            z=z+8;     
        }
       
}