const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}   

function calculate() {
    if(display.value === '0'){
        display.value = '';
    }else{
    try{
    display.value = eval(display.value);
    }catch(error){
        display.value = "Error";
        setTimeout(function () {
            display.value = "";
        }, 500)
    }
}
}

function clearDisplay() {
    display.value = '';
}