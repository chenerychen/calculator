const temp = document.getElementById('userInput');
const convertor = document.getElementById('convertor');
const result = document.getElementById('res');

convertor.addEventListener('click', () => {
    
    function convert(temp) {
       return  ((temp.value* 9) / 5) + 32; 
    }

    result.textContent = convert(temp)
}); 