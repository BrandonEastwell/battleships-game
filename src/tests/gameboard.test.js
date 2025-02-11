import Gameboard from "../scripts/gameboard";
import Ship from "../scripts/ship";

describe("Gameboard", () => {
  let board;
  beforeEach(() => {
    board = new Gameboard();
  })

  it("initialise gameboard grid with 25 grid items", () => {
    expect(board.grid.length).toBe(5);
  });

  it("init ships grid with 25 grid items", () => {
    expect(board.ships.length).toBe(5);
  });

  it("places ship at the coordinate [2,3]", () => {
    const ship = new Ship(1)
    board.placeShip(ship, [2, 3], "horizontal");
    expect(board.ships[3][2]).toBe(ship);
  });

  it("places ship at the coordinate [4,3]", () => {
    const ship = new Ship(1)
    board.placeShip(ship, [4, 3], "horizontal");
    expect(board.ships[3][4]).toBe(ship);
  });

  it("places ship at the coordinate [2,1] with ship length 3 in direction horizontal", () => {
    const ship = new Ship(3)
    board.placeShip(ship, [2, 1], "horizontal");
    expect(board.ships[1][2]).toBe(ship);
    expect(board.ships[1][3]).toBe(ship);
    expect(board.ships[1][4]).toBe(ship);
  });

  it("places ship at the coordinate [2,1] with ship length 3 in direction vertical", () => {
    const ship = new Ship(3)
    board.placeShip(ship, [2, 1], "vertical");
    expect(board.ships[1][2]).toBe(ship);
    expect(board.ships[2][2]).toBe(ship);
    expect(board.ships[3][2]).toBe(ship);
  });

  it("should return error 'Ship placement out of bounds of grid'", () => {
    const ship = new Ship(3)
    expect(() => board.placeShip(ship, [6, 1], "vertical")).toThrow(Error)
    expect(() => board.placeShip(ship, [1, 3], "vertical")).toThrow(Error)
  });

  it("receive attack method increments ships hit by 1", () => {
    const ship = new Ship(3);
    board.placeShip(ship, [2, 1], "horizontal");
    board.receiveAttack([2, 1]);
    expect(ship.hits).toBe(1);
  });

  it("receive attack method records missed shots", () => {
    const ship = new Ship(3);
    board.placeShip(ship, [2, 1], "horizontal");
    board.receiveAttack([2, 1]);
    expect(board.grid[1][2]).toBe(1);
  });

  it("hits on the same coord should not call hit twice", () => {
    const ship = new Ship(2);
    board.placeShip(ship, [2, 1], "horizontal");
    board.receiveAttack([2, 1]);
    board.receiveAttack([2, 1]);
    expect(ship.hits).toBe(1);
  });

  it("checkShipSunk method returns true when all ships have sunk", () => {
    const ship = new Ship(1);
    board.placeShip(ship, [2, 1], "horizontal");
    board.receiveAttack([2, 1]);
    expect(board.allShipsSunk()).toBe(true);
  });

  it("checkShipSunk method returns false when a ship has not sunk", () => {
    const ship = new Ship(3);
    board.placeShip(ship, [2, 1], "horizontal");
    board.receiveAttack([2, 1]);
    expect(board.allShipsSunk()).toBe(false);
  });
});