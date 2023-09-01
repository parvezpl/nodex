function everyCell(clk) {
    let n=clk
    boxAndCell=[];
    for (let index = 1; index <=9; index++) {
        for (let r = 1; r <=9; r++) {
            let selectCell=document.querySelector(`#grid > tbody > tr:nth-child(${index}) > td:nth-child(${r})`).lastChild;
            let tr= Boolean(selectCell.value);
            if (!tr) { // if cell me vallu not ablavle ............
                
                selectCell.value=n;
                stater(selectCell)
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
