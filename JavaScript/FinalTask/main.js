import { fetchData } from "./crud.js";
let fruits =[]
const anglButton = document.querySelector("#angliavandianiai");
const result = document.querySelector(".container");
(() => {fetchData().then(data => {
    if(data){
        fruits = data;
    }
})})();
anglButton.addEventListener("click", () => {
    const sortedFruits = fruits.sort((a,b) => b.nutritions.carbohydrates - a.nutritions.carbohydrates)
    result.innerHTML = ""
    for(let i=0; i<10; i++){
        result.innerHTML += `<p>${sortedFruits[i].name} - ${sortedFruits[i].nutritions.carbohydrates}</p>`;
    }
})
const baltimai = document.querySelector(".baltimai")
baltimai.addEventListener("click", () => {
    result.innerHTML = "";
    const proteinArr = fruits.map(item => item.nutritions.protein);
    const max = Math.max(...proteinArr)
    const filteredFruits = fruits.filter(fruit => fruit.nutritions.protein === max)
    for(let i=0; i<filteredFruits.length; i++){
        result.innerHTML += `<p>${filteredFruits[i].name} - ${filteredFruits[i].nutritions.protein}</p>`;
    }
})
const rebalai = document.querySelector(".riebalai")
rebalai.addEventListener("click", () => {
    result.innerHTML = "";
    for(let i=0; i < fruits.length; i++){
        if(fruits[i].nutritions.fat >= 5){

            result.innerHTML += `<p>${fruits[i].name} - ${fruits[i].nutritions.fat}</p>`   
        }
    }
})
const kalorijos = document.querySelector(".kalorijos");
kalorijos.addEventListener("click", () => {
    result.innerHTML = "";
    // let sum = 0
    // fruits.forEach(item =>{
        //     sum += item.nutritions.calories
        // })
        const sum = fruits.reduce((sum, item) =>{
        sum += item.nutritions.calories
            return sum
    }, 0)
    result.innerHTML += `<p>${sum}</p>`      
})
const cukrai = document.querySelector(".cukrai");
cukrai.addEventListener("click", () => {
    result.innerHTML = "";
    const newCukrai = fruits.map(item => ({
        name: item.name,
        sugar: item.nutritions.sugar,
    }))
    const sortedFruits = newCukrai.sort((a, b) => b.sugar - a.sugar);
    sortedFruits.forEach(item => {
        result.innerHTML += `<p>${item.name} - ${item.sugar}</p>`   
    })   
})