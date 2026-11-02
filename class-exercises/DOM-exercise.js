"use strict";

let timerID = null;

function removeBox(evt){
    let boxParent = evt.currentTarget.parentElement;
    boxParent.removechild(evt.currentTarget);
}


function timedaction(){
    let boxDiv = document.querySelector(".box");
    let newParagraph = document.createElement("p");

    newParagraph.innerText = "I am a box!";
    //newParagraph.className = "div-green";
    newParagraph.setAttribute("class", "div-green");
    newParagraph.addEventListener("click", removeBox)

    boxDiv.appendChild(newParagraph);
}

function startboxing(){
    console.log("Starting boxing")
    timerID = setInterval(timedaction, 1000)
}
function stopboxing(){
    console.log("Stopping boxing")
    clearInterval(timerID)
}

let startbutton = document.querySelector("#start");
let stopbutton = document.querySelector("#end");

startbutton.addEventListener("click", startboxing);
stopbutton.addEventListener("click", stopboxing);

let header = document.querySelector("main-header");
console.log(header)

let alsoheader = document.getElementById("main-header");
console.log(alsoheader)

let  paragraphs = document.querySelector("p");
console.log(paragraphs);

let paragraphsToo = document.getElementById("p");
console.log(paragraphsToo);