import Ship from "./ship";

export default class Player {
  constructor(gameboard) {
    this.gameboard = gameboard;
  }

  createShip(length) {
    return new Ship(length);
  }

  randomizeShips(quantity = 5) {
    const MAX_ATTEMPTS = 50;
    let attempts = 0;
    let placements = [];
    while (quantity > 0 && attempts < MAX_ATTEMPTS) {
      const randCoord = this.randomizeCoord(this.gameboard.GRID_SIZE);
      const direction = this.randomizeDirection();
      const shipLength = this.randomizeLength();
      const ship = this.createShip(shipLength);
      try {
        const placedShipsCoords = this.gameboard.placeShip(ship, randCoord, direction);
        placements = placements.concat(placedShipsCoords);
        quantity--;
      } catch (e) {
        console.log(e);
        attempts++;
      }
    }

    if (attempts >= MAX_ATTEMPTS && quantity !== 0) {
      console.log("Max attempts reached. Could not place all ships.");
    }

    return placements;
  }

  randomizeCoord(size) {
    return [
      Math.floor(Math.random() * size),
      Math.floor(Math.random() * size),
    ];
  }

  randomizeDirection() {
    return Math.floor(Math.random() * 2) === 1 ? "horizontal" : "vertical";
  }

  randomizeLength() {
    return Math.floor((Math.random() * 3) + 1);
  }
}