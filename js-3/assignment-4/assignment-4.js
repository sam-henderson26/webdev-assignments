const numbers = [];

while (true) {
    const input = parseFloat(prompt("Enter a Number: "));

    if (input === 0) {
        break;
    }

    if (!isNaN(input)) {
        numbers.push(input);
    }
}

numbers.sort((a, b) => b - a);

console.log(numbers);