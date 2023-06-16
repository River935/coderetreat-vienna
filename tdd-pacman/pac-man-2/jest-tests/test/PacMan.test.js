import { PacMan } from "../src/PacMan";
import { Maze } from "../src/Maze";

test('PacMan should change direction', () => {
  const pacMan = new PacMan(0, {}); // Create an actual instance of PacMan
  const mockChangeDirection = jest.spyOn(pacMan, 'changeDirection'); // Spy on and mock the changeDirection method

  const maze = new Maze(pacMan);
  
  maze.movePacMan()

  expect(mockChangeDirection).toHaveBeenCalled();
});
   