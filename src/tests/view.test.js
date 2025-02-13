// import Player from "../scripts/player";
// import Gameboard from "../scripts/gameboard";
// import View from "../scripts/view";
//
// describe("View", () => {
//   let player;
//   let view;
//   beforeEach(() => {
//     view = new View(10);
//     player = new Player(new Gameboard());
//   })
//
//   it("should place ship location [0,0] onto DOM grid", () => {
//     view.drawShipToGrid([0,0]);
//     expect(view.BOARD_PLAYER.querySelector(`[data-x="0"][data-y="0"]`)
//       .className).toBe("grid-item alive");
//   });
//
// });