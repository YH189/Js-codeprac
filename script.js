const Rollbutton = document.getElementById("Rollit");
const randomLable = document.getElementById("Randomlabel");
const randomLabel2 = document.getElementById("Randomlabe2");
const randomLabel3 = document.getElementById("Randomlabe3");
const min = 1;
const max = 6;
let randomnum1;
let randomnum2;
let randomnum3;
Rollbutton.onclick = function () {
  randomnum1 = Math.floor(Math.random() * max) + min;
  randomLable.textContent = randomnum1;

  randomnum2 = Math.floor(Math.random() * max) + min;
  randomLabel2.textContent = randomnum2;

  randomnum3 = Math.floor(Math.random() * max) + min;
  randomLabel3.textContent = randomnum3;
};
