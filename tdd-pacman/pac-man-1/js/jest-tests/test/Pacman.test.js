import { Pacman } from "../src/Pacman";

describe("Pacman", () => {
  test("Should be alive", () => {
    const pacman = new Pacman();
    expect(pacman.isAlive()).toBe(true);

  });
  test("Should die after hitting the ghost", () => {
    const pacman = new Pacman();
    pacman.hitGhost();
    expect(pacman.isAlive()).toBe(false);
  });

  test("Should not be in power up state", () => {
    const pacman = new Pacman();
    expect(pacman.isPoweredUp()).toBe(false);
  });

  test("should move if alive", () => {
    const pacman = new Pacman();
    expect(pacman.isMoving()).toBe(true);
  })

  test("should not move if dead", () => {
    const pacman = new Pacman();
    pacman.hitGhost();
    expect(pacman.isMoving()).toBe(false);
  })

  test("Should be in power up state if ate the big dot", () => {
    const pacman = new Pacman();
    pacman.ateBigDot();
    expect(pacman.isPoweredUp()).toBe(true);
  });
  test("should not be in power up state after 15 ticks", () => {
    const pacman = new Pacman();
    pacman.ateBigDot();
    for (let i = 0; i < 15; i++) {
      pacman.tick();
    }
    expect(pacman.isPoweredUp()).toBe(false);
  });
  test("should be in power up state after 14 ticks", () => {
    const pacman = new Pacman();
    pacman.ateBigDot();
    for (let i = 0; i < 14; i++) {
      pacman.tick();
    }
    expect(pacman.isPoweredUp()).toBe(true);
  });

  test("should not be in power up state after time ticks, but not eating a big dot", () => {
    const pacman = new Pacman();
    pacman.tick();
    expect(pacman.isPoweredUp()).toBe(false);
  })

  test("should have upwards direction by default", () => {
    const pacman = new Pacman();
    const direction = pacman.getDirection();
    expect(direction).toEqual('UP');
  })

  test("should change direction", () => {
    const pacman = new Pacman();
    const direction = pacman.changeDirection('DOWN');
    expect(direction).toEqual('DOWN');
  })

});