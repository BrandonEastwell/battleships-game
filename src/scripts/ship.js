export default class Ship {
  length = 0;
  hits = 0;
  #sunk = false;

  constructor(length) {
    this.length = length;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    return this.hits === this.length;
  }

}