let element = document.createElement("span");
let elementDiv = document.createElement("div");
const divas = document.querySelector("#trecias")
let text = document.createTextNode("Mano tekstas");
document.body.append(element);
document.body.prepend(elementDiv);
// divas.remove()
// ----- Pridejom class atributa
const penktadienis = document.querySelector("#penktas");
penktadienis.setAttribute("class", "red")
//  ------ get attribute
const firstParagraph = document.querySelector("p:first-of-type");
console.log(firstParagraph.getAttribute("class"));

const myMain = document.querySelector(".content");
let headings = document.createElement("h2");
let paragraph = document.createElement("p");
const unList = document.createElement("ul");
let myList = document.createElement("li");
const tekstas = "Mano tekstas";
headings.innerText = tekstas;
paragraph.innerText = tekstas;
myList.innerText = tekstas;
unList.prepend(myList);
myMain.prepend(headings, paragraph, unList);

const cityInput = document.querySelector("#myInput");
const mySecondList = document.querySelector(".myList");
const myButton = document.querySelector("button");

myButton.addEventListener("click", myFunction);

function myFunction(event) {
    event.preventDefault();
    const miestuMasivas = document.querySelectorAll("li");
    const miestas = cityInput.value;
    const myItemList = document.createElement("li");
    myItemList.innerText = miestas;
    mySecondList.append(myItemList);
    }
