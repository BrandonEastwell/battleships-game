export default class View {
  constructor(GRID_SIZE) {
    this.BOARD_PLAYER = document.querySelector(".gameboard:first-of-type");
    this.BOARD_COMPUTER = document.querySelector(".gameboard:last-of-type");
    this.GRID_SIZE = GRID_SIZE;
    this.createBoards()
  }

  createBoards() {
    this.BOARD_PLAYER.style.gridTemplateRows = `repeat(${this.GRID_SIZE}, 1fr)`;
    this.BOARD_PLAYER.style.gridTemplateColumns = `repeat(${this.GRID_SIZE}, 1fr)`;

    this.BOARD_COMPUTER.style.gridTemplateRows = `repeat(${this.GRID_SIZE}, 1fr)`;
    this.BOARD_COMPUTER.style.gridTemplateColumns = `repeat(${this.GRID_SIZE}, 1fr)`;

    for (let row = 0; row < this.GRID_SIZE; row++) {
      for (let col = 0; col < this.GRID_SIZE; col++) {
        const gridOneSpace = document.createElement("div");
        const gridTwoSpace = document.createElement("div");

        gridOneSpace.dataset.x = row.toString();
        gridOneSpace.dataset.y = col.toString();
        gridOneSpace.className = "grid-item";

        gridTwoSpace.dataset.x = row.toString();
        gridTwoSpace.dataset.y = col.toString();
        gridTwoSpace.className = "grid-item";

        gridOneSpace.addEventListener("click", (ev) => {

        })

        gridTwoSpace.addEventListener("click", (ev) => {

        })

        this.BOARD_PLAYER.append(gridOneSpace);
        this.BOARD_COMPUTER.append(gridTwoSpace);
      }
    }

  }

  drawShipsToGrid(coords) {
    for (let i = 0; i < coords.length; i++) {
      const [x,y] = coords[i];
      const gridItem = this.BOARD_PLAYER.querySelector(`[data-x="${x}"][data-y="${y}"]`);
      gridItem.className += " alive"
    }
  }

  drawShipToGrid(coord) {
    const [x,y] = coord;
    const gridItem = this.BOARD_PLAYER.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    gridItem.className += " alive"
  }
}