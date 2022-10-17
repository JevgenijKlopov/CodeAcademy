'use strict';
const result = document.querySelector('.result');

const surprise = document.querySelector(".surprise")

setTimeout( function ups(){ for (let i = 0; i < 100; i++) {
    surprise.style.fontSize = `${i}px`;
}
}
)
