import Pacman from "../src/Pacman";

describe("Pacman", () => {
  test("Should moves to the right with one position", () => {
    let newStruct = Pacman.movesRight(Pacman.struct);
    let pacman = Pacman.getCoordinates(newStruct);
    expect(pacman).toEqual([0, 1]);
  });

  test("Should not move up on boundary", () => {
    let newStruct = Pacman.movesUp(Pacman.struct);
    let pacman = Pacman.getCoordinates(newStruct);
    expect(pacman).toEqual([0, 0]);
  });

  test("Should not move up on boundary", () => {
    let newStruct = Pacman.movesUp(Pacman.struct);
    let pacman = Pacman.getCoordinates(newStruct);
    expect(pacman).toEqual([0, 0]);
  });

  test("Should collide with ghost ", () => {
    let newStruct = Pacman.movesUp(Pacman.struct);
    let pacman = Pacman.getCoordinates(newStruct);
    let ghostStruct = Pacman.movesUp(Pacman.struct);
    let ghost = Pacman.getCoordinates(ghostStruct);

    expect(pacman).toEqual(ghost);
  });

  test("Should not collide with ghost ", () => {
    // Initialize Pacman and Ghost at different positions
    Pacman.struct = { pacman: [1, 1], ghost: [0, 0] };

    let newStruct = Pacman.movesUp(Pacman.struct.pacman);
    let pacman = Pacman.getCoordinates(newStruct);
    let ghostStruct = Pacman.struct.ghost;
    let ghost = Pacman.getCoordinates(ghostStruct);

    expect(pacman).not.toEqual(ghost);
  });
});
