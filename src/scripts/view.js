export default class View {
  constructor(GRID_SIZE) {
    this.PLAYER_BOARD = document.querySelector(".gameboard:first-of-type");
    this.COMPUTER_BOARD = document.querySelector(".gameboard:last-of-type");
    this.RANDOMIZE_BTN = document.getElementById('btn-randomize');

    this.GRID_SIZE = GRID_SIZE;
    this.createBoards()
  }

  createBoards() {
    this.PLAYER_BOARD.style.gridTemplateRows = `repeat(${this.GRID_SIZE}, 1fr)`;
    this.PLAYER_BOARD.style.gridTemplateColumns = `repeat(${this.GRID_SIZE}, 1fr)`;

    this.COMPUTER_BOARD.style.gridTemplateRows = `repeat(${this.GRID_SIZE}, 1fr)`;
    this.COMPUTER_BOARD.style.gridTemplateColumns = `repeat(${this.GRID_SIZE}, 1fr)`;

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

        this.PLAYER_BOARD.append(gridOneSpace);
        this.COMPUTER_BOARD.append(gridTwoSpace);
      }
    }

  }

  drawShipsToGrid(coords) {
    for (let i = 0; i < coords.length; i++) {
      const [x,y] = coords[i];
      const gridItem = this.PLAYER_BOARD.querySelector(`[data-x="${x}"][data-y="${y}"]`);
      gridItem.className += " alive";
    }
  }

  drawShipToGrid(coord) {
    const [x,y] = coord;
    const gridItem = this.PLAYER_BOARD.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    gridItem.className += " alive"
  }

  setAnnouncementText(message) {
    const gameboardState = document.getElementById('gameboard-state');
    gameboardState.textContent = message;
  }
}