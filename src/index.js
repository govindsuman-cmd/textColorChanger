const blueB = document.getElementById("blueButton");
const redB = document.getElementById("redButton");
const para = document.getElementById("para");
const color = ["blue", "red"];

blueB.addEventListener("click", changeColorB);
redB.addEventListener("click", changeColorC);

function changeColorB() {
  para.style.color = "blue";
}

function changeColorC() {
  para.style.color = "red";
}
