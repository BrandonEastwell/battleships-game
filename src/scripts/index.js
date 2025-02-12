import "../styles/normalize.css";
import "../styles/styles.css";

const BOARD_ONE = document.querySelector(".gameboard:nth-child(1)");
const BOARD_TWO = document.querySelector(".gameboard:nth-child(2)");

BOARD_ONE.style.gridTemplateRows = "repeat(5, 1fr)";
BOARD_ONE.style.gridTemplateColumns = "repeat(5, 1fr)";

BOARD_TWO.style.gridTemplateRows = "repeat(5, 1fr)";
BOARD_TWO.style.gridTemplateColumns = "repeat(5, 1fr)";

for (let row = 0; row < 5; row++) {
  for (let col = 0; col < 5; col++) {
    const gridOne = document.createElement("div");
    const gridTwo = document.createElement("div");
    BOARD_ONE.append(gridOne);
    BOARD_TWO.append(gridTwo);
  }
}