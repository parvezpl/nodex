
// input event ..................................................
cellxy.addEventListener('input', function(e) {
    stater(e.target);
    intervalue=0;
    sudu=false;
});



// dbclick buto event...................... 
cellxy.addEventListener('dblclick', function(e) {
    console.log(e.target, intervalue);
    e.target.value='';
    intervalue=0;
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

})
