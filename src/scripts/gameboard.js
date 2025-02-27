export default class Gameboard {
  constructor(GRID_SIZE = 10) {
    this.GRID_SIZE = GRID_SIZE;
    this.grid = Array.from({ length: this.GRID_SIZE }, () => Array(this.GRID_SIZE).fill(0));
    this.ships = Array.from({ length: this.GRID_SIZE }, () => Array(this.GRID_SIZE).fill(null));
  }

  receiveAttack(coord) {
    const [x, y] = coord;
    let ship = this.ships[y][x];
    if (ship !== null) {
      ship.hit();
      this.ships[y][x] = null;
      return true;
    }
    return false;
  }

  placeShip(ship, coord, direction) {
    const [x, y] = coord;
    let placed = [];
    if (ship.length + x > this.GRID_SIZE || ship.length + y > this.GRID_SIZE) {
      throw new Error("Ship placement out of bounds of grid")
    }

    for (let i = 0; i < ship.length; i++) {
      if (direction === "horizontal") {
        if (this.ships[y][x + i] === null) {
          this.ships[y][x + i] = ship;
          placed.push([x + i,y]);
        }
        else throw new Error("Ship placement overlapping another ship");
      } else if (direction === "vertical") {
        if (this.ships[y + i][x] === null) {
          this.ships[y + i][x] = ship;
          placed.push([x,y + i]);
        }
        else throw new Error("Ship placement overlapping another ship");
      }
    }

    return placed;
  }

  allShipsSunk() {
    for (let i = 0; i < this.ships.length; i++) {
      const row = this.ships[i]; // Get row of ships
      for (const ship of row) {
        if (ship !== null && !ship.isSunk()) {
          return false;
        }
      }
    }
    return true;
  }
}