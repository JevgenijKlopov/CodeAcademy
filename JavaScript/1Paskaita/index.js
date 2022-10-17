// const skaicius = prompt("Ivesk skaiciu nuo 1 iki 10");
// if (skaicius > 0 && skaicius < 11)
// {
//     console.log(skaicius)
// }
// const vardas = prompt("Iveskite varda")
// let bithDay = "geguzes12"
// console.log (vardas, "yra gimes", bithDay )
const bazinisDydis = prompt("Iveskit bazinio uzmokescio dydi");
const zmones = 1761463;
const biudzetas = 8487300000;
const ismoka = bazinisDydis * zmones;
const procentai = ((ismoka*100)/biudzetas).toFixed(2);
console.log ("Kiek procentu sudaro Lietuvos biudzeto ismokos" + procentai + "%");
console.log (`Kiek procentu sudaro Lietuvos biudzeto ismokos ${procentai}%`);