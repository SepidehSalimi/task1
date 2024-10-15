function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let randomNumber = getRandomNumber(1, 100);
// console.log(randomNumber);

const input = document.querySelector("input");
const btn = document.querySelector("button");
const txt = document.getElementById("txt");
let counter = 0;
let userCounter = 10;
let userCounterElement = document.getElementById("counter");
userCounterElement.innerHTML = userCounter;

btn.addEventListener("click", () => {
  if (counter < 10) {
    let inputValue = input.value;
    if (inputValue > randomNumber) {
      txt.innerHTML = "عدد وارد شده بزرگ تر از عدد سیستم میباشد📈";
    } else if (inputValue < randomNumber) {
      txt.innerHTML = "عدد وارد شده کوچک تر از عدد سیستم میباشد📉";
    } else {
      txt.innerHTML = "تبریک شما برنده شدید🎉";
      txt.classList.add("success");
    }
    counter++;
    userCounterElement.innerHTML = userCounter - counter;
  } else {
    txt.innerHTML = "😕شما بازنده شدید - تعداد حدس به پایان رسید";
    txt.classList.add("danger");
  }
});
