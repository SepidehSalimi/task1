//task3:
const click = document.getElementById("click");
click.addEventListener("click", function () {
  document.getElementById("h1").textContent = "hello world...🤩";
});

const over = document.getElementById("overout");
over.addEventListener("mouseover", function () {
  over.style.backgroundColor = "black";
  over.innerText = "mouseover";
});
over.addEventListener("mouseout", function () {
  over.style.backgroundColor = "#0d77f1";
  over.innerText = "mouseout";
});

//task1:
const products = [
  { name: "mouse", price: "20,000", category: "Digital" },
  { name: "iphon16 pro", price: "100,000", category: "Mobile" },
  { name: "keybord", price: "40,000", category: "Digital" },
];

const saleProducts = products.map((element) => {
  return element["price"] + 0.2 / (element["price"] * 1000);
});

products.sort();
console.log(products, saleProducts);

// task 2:
function delay(user) {
  return;
}
