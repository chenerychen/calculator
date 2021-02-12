// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { add } from './utilities.js'; 
import { subtract } from './utilities.js'; 
import { multiply } from './utilities.js'; 
import { divide } from './utilities.js'; 

const numOneInput = document.getElementById('num1');
const numTwoInput = document.getElementById('num2');
const equals = document.getElementById('equals');
const select = document.getElementById('select');
const result = document.getElementById('result');

equals.addEventListener('click', () => {
    if (isNaN(Number(numOneInput.value)) || isNaN(Number(numTwoInput.value))) {
        alert(result.textContent = 'Please enter numbers');
    }

    const num1 = Number(numOneInput.value);
    const num2 = Number(numTwoInput.value); 

    // selectValue(select, num1, num2);

    function calculator(num1, num2, callback) {
        return callback(num1, num2);  
    }
      
    // let add = function(num1, num2) {
    //     return num1 + num2; 
    // };

    // addFn(num1 + num2);

    // let minus = function(num1, num2) {
    //     return num1 - num2; 
    // };
    // subtract(num1 - num2); 
      
    // let multi = function(num1, num2) {
    //     return num1 * num2; 
    // };
    // multiply(num1 * num2); 
      
    // // let divide = function(num1, num2) {
    // //     return num1 / num2; 
    // // };

    // divide(num1 / num2); 

    if (select.value === 'plus') {
        const sum = calculator(num1, num2, add); 
        result.textContent = sum; 
    } else if (select.value === 'minus') {
        const sum = calculator(num1, num2, subtract); 
        result.textContent = sum; 
    } else if (select.value === 'multi') {
        const sum = calculator(num1, num2, multiply); 
        result.textContent = sum; 
    } else if (select.value === 'divide') {
        const sum = calculator(num1, num2, divide); 
        result.textContent = sum; 
    }
    
    // result.textContent = sum; 
    // num1.value = 0;
    // num2.value = 0; 
    // function x(num1, num2) {
    //     let plus = function() {
    //         num1 + num2
    //     }
    //     return plus 
    // }
   
});



