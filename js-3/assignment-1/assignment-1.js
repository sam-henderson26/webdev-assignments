const numbers = [];
const maxNumbers = 5;

for (let i = 0; i < maxNumbers; i++) {
    let input = prompt("Enter number " + (i + 1) + " of 5:");
    
    numbers.push(Number(input));
}

let ReversedOrder = "The numbers in reverse order are:\n";

    for (let i = numbers.length - 1; i >= 0; i--) {

        ReversedOrder += numbers[i] + "\n";

        console.log(numbers[i]);
    }

    document.getElementById("target").textContent = ReversedOrder;