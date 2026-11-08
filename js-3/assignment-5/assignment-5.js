const numbers = [];

while (true) {
    const input = parseFloat(prompt("Enter a Number:"));
    if (isNaN(input)) {
        alert("Please enter a valid number.");
        continue;
    }

    if (numbers.includes(input)) {
        alert(`This number has already been typed.`);
        break;
    }

    numbers.push(input);
}

numbers.sort((a, b) => a - b);

console.log(numbers);