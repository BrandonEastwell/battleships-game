export default class Gameboard {
  GRID_SIZE = 5;
  constructor() {
    this.grid = Array.from({ length: this.GRID_SIZE }, () => Array(this.GRID_SIZE).fill(0));
    this.ships = Array.from({ length: this.GRID_SIZE }, () => Array(this.GRID_SIZE).fill(null));
  }

  receiveAttack(coord) {
    const [x, y] = coord;
    let ship = this.ships[y][x];
    if (ship !== null && this.grid[y][x] === 0) {
      ship.hit();
      if (ship.isSunk()) {
        this.allShipsSunk();
      }
    }
    this.grid[y][x] = 1;
  }

  placeShip(ship, coord, direction) {
    const [x, y] = coord;

    if (ship.length + x > this.GRID_SIZE || ship.length + y > this.GRID_SIZE) {
      throw new Error("Ship placement out of bounds of grid")
    }

    for (let i = 0; i < ship.length; i++) {
      if (direction === "horizontal") {
        this.ships[y][x + i] = ship;
      } else if (direction === "vertical") {
        this.ships[y + i][x] = ship;
      }
    }
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
0 , 0 , 0 , 0 , 0
0 , 0 , 0 , 0 , 0
0 , 0 , 0 , 0 , 0
0 , 0 , 1 , 0 , 0
0 , 0 , 0 , 0 , 0

  2,3

    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]