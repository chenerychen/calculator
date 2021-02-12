// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM






const numOneInput = document.getElementById('firstNum');
const numTwoInput = document.getElementById('secondNum');
const randomNum = document.getElementById('randomNumber');
const generatedRandomNum = Math.floor(Math.random() * Math.floor(100));
randomNum.textContent = generatedRandomNum;
const equal = document.getElementById('=');
const operator = document.getElementById('operator');

equal.addEventListener('click', () => {
    if ((operator.value === 'p') && (Number(numOneInput.value) + Number(numTwoInput.value) === randomNum.textContent)){
        alert('aaa');
    }
});


// const equals = document.getElementById('equals');
// const select = document.getElementById('select');
// const result = document.getElementById('result');
// const number = document.getElementById('randomNumber');

// const randomNumber = Math.floor(Math.random() * Math.floor(100));

// number.textContent = randomNumber;

// equals.addEventListener('click', () => {
//     if (isNaN(Number(numOneInput.value)) || isNaN(Number(numTwoInput.value))) {
//         alert(result.textContent = 'Please enter numbers');
//     }
    
//     const num1 = Number(numOneInput.value);
//     const num2 = Number(numTwoInput.value); 

//     // selectValue(select, num1, num2);

//     function calculator(num1, num2, callback) {
//         return callback(num1, num2);  
//     }
      
//     let add = function(num1, num2) {
//         return num1 + num2; 
//     };

//     let minus = function(num1, num2) {
//         return num1 - num2; 
//     };
      
//     let multi = function(num1, num2) {
//         return num1 * num2; 
//     };
      
//     let divide = function(num1, num2) {
//         return num1 / num2; 
//     };

//     if (select.value === 'plus') {
//         const sum = calculator(num1, num2, add); 
//         result.textContent = sum; 
//     } else if (select.value === 'minus') {
//         const sum = calculator(num1, num2, minus); 
//         result.textContent = sum; 
//     } else if (select.value === 'multi') {
//         const sum = calculator(num1, num2, multi); 
//         result.textContent = sum; 
//     } else if (select.value === 'divide') {
//         const sum = calculator(num1, num2, divide); 
//         result.textContent = sum; 
//     }
   
// });



