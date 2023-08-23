console.log("hello world");
document.getElementById("demo").innerHTML = "Hello JavaScript2!"

// testing 
// const list = {1:"aa", 2:"bb", 3:"cc", 4:"dd"}
const list = [2, 3, 4, 5, 6, 7, 8, 9 ];
const data =list.forEach((element)=> {
    const item1=[];
    item1.push(element);
    console.log(item1); 
    return item1;
});
console.log(data);

// for (let i = 0; i < list.length; i++) {
//     const element = list[i];
//     console.log(`for loop result : ${element}`);    
// }

