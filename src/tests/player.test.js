import Player from "../scripts/player";
import Gameboard from "../scripts/gameboard";
import Ship from "../scripts/ship";

describe("Player", () => {
  let player;
  beforeEach(() => {
    player = new Player(new Gameboard());
  })

  it("player object should initialize with a gameboard", () => {
    expect(player.gameboard.grid.length).toBe(10);
  });

  it("player creates a ship with length 1", () => {
    const ship = player.createShip(1);
    expect(ship).toBeInstanceOf(Ship);
    expect(ship.length).toBe(1);
  });

  it("player places ship on gameboard grid at [1, 2]", () => {
    const ship = player.createShip(1);
    player.gameboard.placeShip(ship, [1, 2], "horizontal");
    expect(player.gameboard.ships[2][1]).toBeInstanceOf(Ship);
  });

  it("returns error if placing an overlapping ship", () => {
    const ship = player.createShip(1);
    player.gameboard.placeShip(ship, [1, 2], "horizontal");
    expect(() => player.gameboard.placeShip(ship, [1, 2], "horizontal")).toThrow(Error);
  });

  it("randomizing coordinates returns numbers within grid size", () => {
    const [x, y] = player.randomizeCoord(5);
    expect(x).toBeGreaterThanOrEqual(0);
    expect(x).toBeLessThanOrEqual(4);
    expect(y).toBeGreaterThanOrEqual(0);
    expect(y).toBeLessThanOrEqual(4);
  });

  it("randomizing ship length returns less than 4 bigger than 0", () => {
    const length = player.randomizeLength();
    expect(length).toBeLessThan(4);
    expect(length).toBeGreaterThan(0);
  });

  it("player randomly places at least 1 ship on gameboard", () => {
    player.randomizeShips();
    let ships = [];
    player.gameboard.ships.forEach((row) => {
      row.forEach((ship) => {
        if (ship !== null && !ships.includes(ship)) {
          ships.push(ship);
        }
      })
    })

    expect(ships.length).toBeGreaterThan(0);
  });

  it("player randomly places exactly 5 ships on gameboard", () => {
    console.log = jest.fn();

    player.randomizeShips(5);

    let ships = [];
    player.gameboard.ships.forEach((row) => {
      row.forEach((ship) => {
        if (ship !== null && !ships.includes(ship)) {
          ships.push(ship);
        }
      });
    });

    expect(ships.length).toBe(5);
    expect(console.log).not.toHaveBeenCalledWith("Max attempts reached. Could not place all ships.");
  });
});