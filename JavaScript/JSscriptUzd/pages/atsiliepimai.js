const textEL = document.querySelector("#feedback");
const formEl = document.querySelector("form");
const postEl = document.querySelector(".posts");
let postsEl = []
formEl.addEventListener("submit", (e) =>{
    e.preventDefault();
postEl.innerHTML  += `<p>${textEL.value}</p>`;
postsEl.push(textEL.value);
localStorage.setItem("manoZinutes", JSON.stringify(postsEl))
});

(() =>{
    const data = JSON.parse(localStorage.getItem("manoZinutes"));
    if(data.length > 0) {
        postsEl.push(...data);
        data.forEach(item => postEl.innerHTML  += `<p>${item}</p>`
        )
    }
})();