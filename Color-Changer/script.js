const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colorCode = document.getElementById("color-code");

btn.addEventListener("click", function () {
  let hexColor = "#";
  
  // A Hex code has 6 characters
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  colorCode.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// Helper function to pick a random index from the hex array
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}