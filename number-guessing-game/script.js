const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempt = 1;
let guess;
let runn = true;
while (runn) {
  guess = Number(window.prompt(`Please enter the number from ${min}-${max}`));
  if (isNaN(guess)) {
    window.alert("Enter a number");
  } else if (guess < min || guess > max) {
    window.alert(`Enter the number between ${min}-${max}`);
  } else {
    attempt++;
    if (guess > answer) {
      window.alert("The Number is TOO HIGH!");
    } else if (guess < answer) {
      window.alert("The Number is TOO LOW");
    } else {
      window.alert(
        `CONGRATS! You have the enterd the number after ${attempt} attempt`,
      );
      runn = false;
    }
  }
}
