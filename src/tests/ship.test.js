import Ship from "../scripts/ship";

describe("Ship", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship(3);
  })

  it("initialise with the correct length", () => {
    expect(ship.length).toBe(3);
  });

  it("initialise with the correct hits", () => {
    expect(ship.hits).toBe(0);
  });

  it("hit() method should increases hit count by 1", () => {
    ship.hit();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.hits).toBe(2);
  });

  it("isSunk() returns true if hits equals length", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  it("isSunk() returns false if hits do not equal length", () => {
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

});