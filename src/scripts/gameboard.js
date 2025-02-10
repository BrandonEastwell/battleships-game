import Grid from "./grid";

export default class Gameboard {
  #grid = [];
  constructor() {
    let y = 0;
    for (let x = 0; x < 25; x++) {
      if (x % 5) {
        y++;
        this.#grid.push(new Grid(x, y));
      } else {
        this.#grid.push(new Grid(x, y));
      }
    }
  }

  receiveAttack() {

  }


}