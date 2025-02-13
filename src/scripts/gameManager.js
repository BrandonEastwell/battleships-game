import Player from "./player";
import Gameboard from "./gameboard";
import View from "./view";

export default class GameManager {
  gameStart = false;
  playerTurn = false;
  playerShipLocations;
  computerShipLocations;

  constructor(GRID_SIZE = 10) {
    this.GRID_SIZE = GRID_SIZE;
    this.PLAYER = new Player(new Gameboard(GRID_SIZE));
    this.COMPUTER = new Player(new Gameboard(GRID_SIZE));
    this.VIEW = new View(GRID_SIZE);

    this.VIEW.RANDOMIZE_BTN.addEventListener('click', () => {
      this.playerShipLocations = this.PLAYER.randomizeShips(5);
      this.computerShipLocations = this.COMPUTER.randomizeShips(5);

      this.VIEW.drawShipsToGrid(this.playerShipLocations);
      this.toggleGame();
      this.nextRound();
    })

    this.VIEW.COMPUTER_BOARD.addEventListener('click', (ev) => {
      if (this.gameStart && this.playerTurn) {
        let target = ev.target.closest(".grid-item");
        const {x,y} = target.dataset;
        if (target.className === "grid-item" || target.className === "grid-item alive") {
          const hitShip = this.COMPUTER.gameboard.receiveAttack([x,y]);
          if (hitShip) {
            target.className += " dead"
          } else {
            target.className += " hit"
          }

          if (this.COMPUTER.gameboard.allShipsSunk()) {
            this.wonGame("YOU WON!");
          } else {
            this.nextRound();
          }
        }
      }
    })
  }

  simulateComputerTurn() {
    const [x,y] = this.randomizeCoord(this.GRID_SIZE);
    const target = this.VIEW.PLAYER_BOARD.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    if (target.className === "grid-item" || target.className === "grid-item alive") {
      const hitShip = this.PLAYER.gameboard.receiveAttack([x,y]);
      if (hitShip) {
        target.className += " dead"
      } else {
        target.className += " hit"
      }

      if (this.PLAYER.gameboard.allShipsSunk()) {
        this.wonGame("COMPUTER WON!");
      } else {
        this.nextRound();
      }
    }
  }

  wonGame(message) {
    this.toggleGame();
    this.VIEW.setAnnouncementText(message)
  }

  toggleGame() {
    this.gameStart = !this.gameStart;
  }

  nextRound() {
    this.playerTurn = !this.playerTurn;
    if (!this.playerTurn) {
      this.VIEW.setAnnouncementText("COMPUTERS TURN...")
      this.simulateComputerTurn();
    } else {
      this.VIEW.setAnnouncementText("YOUR TURN...")
    }
  }

  randomizeCoord(size) {
    return [
      Math.floor(Math.random() * size),
      Math.floor(Math.random() * size),
    ];
  }
}