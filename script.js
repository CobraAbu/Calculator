let display=document.querySelector(".display")

function append(p) {
    
    display.value+=p
}
function calculate(p) {
    let ans=eval(display.value);
    display.value=ans;
}

function clearDisplay() {
    display.value="";
    
}