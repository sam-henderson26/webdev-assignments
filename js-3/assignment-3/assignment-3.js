const dogs = [];

for (let i = 0; i < 6; i++) {
    const name = prompt("Dog Name: ");
    dogs.push(name);
}

dogs.sort().reverse();

const list = document.getElementById("list");
for (let name of dogs) {
    list.innerHTML += `<li>${name}</li>`;
}