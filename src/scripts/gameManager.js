import Player from "./player";
import Gameboard from "./gameboard";
import View from "./view";

export default class GameManager {
  constructor() {
    const GRID_SIZE = 10;
    const PLAYER = new Player(new Gameboard(GRID_SIZE));
    const COMPUTER = new Player(new Gameboard(GRID_SIZE));
    const VIEW = new View(GRID_SIZE);

    const playerShipLocations = PLAYER.randomizeShips(5);
    const computerShipLocations = COMPUTER.randomizeShips(5);


  }
}