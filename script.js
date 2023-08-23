console.log("hello world");
document.getElementById("demo").innerHTML = "<h1>Hell a this JavaScript23!</h1>";


const clock = document.getElementById("clock");
setInterval(function() {
    let date = new Date();
    clock.innerHTML=date.toLocaleTimeString();
}, 1000)