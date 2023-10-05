// variables to html
const resetButton = document.querySelector("#resetButton");
const displayNumber = document.querySelector("#displayNumber");
const plusButton = document.querySelector("#plusButton");
console.log(plusButton);
const minusButton = document.querySelector("#minusButton");
console.log(minusButton);
// counts the numbers
let count = 0;

// plus
function increment() {
    count = count + 1;
    console.log(count);
    displayNumber.textContent = count;
}

// minus
function decrement() {
    count = count - 1;
    console.log(count);
    displayNumber.textContent = count;
}
// resets number
function reset() {
    count = count == 0;
    console.log(count);
    reset.textContent = count;
}

// lisning for Buttons click events
plusButton.addEventListener("click", increment);

minusButton.addEventListener("click", decrement);

// reset button isnt working..




