// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM




const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const equals = document.getElementById('equals');
// const plus = document.getElementById('plus');
// const minus = document.getElementById('minus');
// const times = document.getElementById( 'times');
// const divide = document.getElementById( 'divide');

const result = document.getElementById('result');


equals.addEventListener('click', () => {
    if (isNaN(Number(num1.value)) || isNaN(Number(num2.value))) {
        alert(result.textContent = 'Please enter numbers');
    }

    const sum = Number(num1.value) + Number(num2.value); 
    result.textContent = sum; 
    // num1.value = 0;
    // num2.value = 0;

});



