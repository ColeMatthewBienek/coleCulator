
let display = document.getElementById('calc-screen');
let buttons = Array.from(document.getElementsByTagName('button'));
console.log('btns', buttons);
let mathString = '';
buttons.forEach(button => {
   
    button.addEventListener('click', (ele) => {
        
        let buttonClick = ele.target.value;
        let isValid = (ele.target.id === "num" || ele.target.id === "func");
        
        if (buttonClick === 'equal') {
            display.value = '';
            let total = math.evaluate(mathString);
            display.value = total;
            return;
        }

        if (buttonClick === "clear") {
            display.value = "";
            mathString = '';
        } 

        if (isValid){
             mathString += buttonClick;
            display.value += buttonClick;
            console.log('ms',mathString)
        }
           
    })
})



