let display=document.getElementById('display'); 
let clearButton=document.getElementById('clearButton')
let blinkingCursor=document.getElementById('blinking-cursor')
document.addEventListener('keydown',handleKeyPress);

function clearDisplay(){
    display.value=''; 
    updateClearButton();
    updateBlinkingCursor();
} 
function appendCharacter(char){
    display.value += char; 
    updateClearButton();
    updateBlinkingCursor();
} 
function calculateResult(){
    try{
        display.value=eval(display.value); 
    } catch (error){{} 
        display.value='Error'; 
    }
    let enterButton=document.getElementById('enterButton'); 
    enterButton.classList.add('animate'); 
    enterButton.addEventListener('animationend', ()=>{{} 
        enterButton.classList.remove('animate'); 
    }); 
    updateClearButton();
    updateBlinkingCursor();
}
function negateNumber(){
    if (display.value){
        let currentValue=parseFloat(display.value);
        if (!isNaN(currentValue)){
            currentValue=-currentValue;
            display.value=currentValue.toString();
        }
    }
    updateClearButton();
    updateBlinkingCursor();
}
function validateInput(){
    display.value=display.value.replace(/[^0-9+\-*/.]/g,'');
    updateClearButton();
    updateBlinkingCursor();
}
function updateClearButton(){
    if (display.value==''){
        clearButton.innerText='AC'
    } else{
        clearButton.innerText='C'
    }
}
function updateBlinkingCursor(){
    if(display.value===''){
        blinkingCursor.style.display='inline-block';
    }else{
        blinkingCursor.style.display='none';
    }
}
updateBlinkingCursor();

function convertToPercentage() { 
    if (display.value) { 
        let lastIndex=display.value.length - 1; 
        let numberEndIndex=lastIndex;
        while (numberEndIndex >= 0 && (display.value[numberEndIndex] >= '0' && display.value[numberEndIndex] <= '9' || display.value[numberEndIndex]=== '.')) { 
            numberEndIndex--; 
        } 
        numberEndIndex++; 
        if (numberEndIndex <= lastIndex) { 
            let lastnumber=display.value.substring(numberEndIndex); 
            let percentageValue=parseFloat(lastnumber) / 100; 
            display.value=display.value.substring(0, numberEndIndex) + percentageValue; 
        } 
    } 
    updateClearButton(); 
    updateBlinkingCursor(); 
} 
updateBlinkingCursor()
function handleKeyPress(event) {
    const key= event.key;
    if (key >= '0' && key <= '9') {
        appendCharacter(key);
    } else if (key=== '+') {
        appendCharacter('+');
    } else if (key=== '%') {
        convertToPercentage();
    } else if (key=== '-') {
        appendCharacter('-');
    } else if (key=== '*') {
        appendCharacter('*');
    } else if (key=== '/') {
        appendCharacter('/');
    } else if (key=== '.') {
        appendCharacter('.');
    } else if (key=== 'Enter') {
        calculateResult();
    } else if (key=== 'Backspace') {
        display.value= display.value.slice(0, -1);
        updateClearButton();
        updateBlinkingCursor();
    } else if (key=== 'Escape') {
        clearDisplay();
    }
}