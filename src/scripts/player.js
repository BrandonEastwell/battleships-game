import Ship from "./ship";

export default class Player {
  constructor(gameboard) {
    this.gameboard = gameboard;
  }

  createShip(length) {
    return new Ship(length);
  }

  randomizeShips(quantity = 5) {
    while (quantity > 0) {
      const randCoord = this.randomizeCoord(quantity);
      const direction = this.randomizeDirection();
      const shipLength = this.randomizeLength();
      const ship = this.createShip(shipLength);

      try {
        this.gameboard.placeShip(ship, randCoord, direction);
        quantity--;
      } catch (e) {
        console.log(e);
      }
    }
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