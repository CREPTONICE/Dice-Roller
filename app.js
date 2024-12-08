function Roll() {
  let numOfDice = document.getElementById("numOfDice").value;
  let diceNumber = document.getElementById("diceNumber");
  let diceImage = document.getElementById("diceImage");

  let values = [];
  let images = [];

  for (let i = 0; i < numOfDice; i++) {
    let value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(
      `<img src="Dice/${value}.png" alt="Dice ${value}" draggable="false">`
    );
  }

  diceNumber.textContent = `Dice: ${values.join(", ")}`;
  diceImage.innerHTML = images.join("");
}
