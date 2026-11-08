const count = prompt("Number of Participants: ");
const participants = [];

for (let i = 0; i < count; i++) {
    const name = prompt("Enter name:");
    participants.push(name);
}

participants.sort();

const list = document.getElementById("list");
for (let name of participants) {
    list.innerHTML += `<li>${name}</li>`;
}