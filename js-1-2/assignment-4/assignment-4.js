const username = prompt ("Name: ");
const userhouse = Math.floor(Math.random() * 4) + 1;

let house = "";

if (userhouse === 1) {
    house = "Gryffindor";
} else if (userhouse === 2) {
    house = "Slytherin";
} else if (userhouse === 3) {
    house = "Hufflepuff";
} else {
    house = "Ravenclaw";
}

if (username) {
    document.getElementById("target").textContent = `${username}, you are ${house}.`;
} else {
    document.getElementById("target").textContent = `Stranger, you are ${house}.`;
}