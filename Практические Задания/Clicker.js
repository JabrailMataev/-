let numberElement = document.querySelector('#number'); 
let upButton = document.querySelector('#up');         
let downButton = document.querySelector('#down');    

let counter = 0;
numberElement.textContent = counter;

upButton.addEventListener('click', function() {
    counter++;
    numberElement.textContent = counter; 
});

downButton.addEventListener('click', function() {
    counter--; 
    numberElement.textContent = counter;
});