let input = prompt("Please enter a year:");
let year = parseInt(input);

let display = document.getElementById("target");



if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    display.innerText = year + " is a leap year!";
} else {
    display.innerText = year + " isn't a leap year.";
}
