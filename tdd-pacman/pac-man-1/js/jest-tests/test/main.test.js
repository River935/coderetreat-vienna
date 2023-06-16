import {Pacman} from "../src/Pacman";

class Game {
    pacmanPosition = { row: 0, column: 0 };
    pacman = new Pacman();

    tick() {
        this.pacman.tick();

        if (this.pacman.getDirection() === "UP") {
            this.pacmanPosition.row += 1;
        } else if (this.pacman.getDirection() === "DOWN") {
            this.pacmanPosition.row -= 1;
        } else if (this.pacman.getDirection() === "RIGHT") {
            this.pacmanPosition.column += 1;
        } else if (this.pacman.getDirection() === "LEFT") {
            this.pacmanPosition.row -= 1;
        }

        console.log(
            `Pacman is ${this.pacman.isAlive() ? 'alive' : 'dead'},\nat row: ${this.pacmanPosition.row} col: ${this.pacmanPosition.column}\nand moving ${this.pacman.getDirection()}`
        )
    }
}

describe('Game', () => {
    it('run', () => {
        const game = new Game();
        for (let i = 0; i < 100; i++) {
            game.tick();
        }
    })     
});