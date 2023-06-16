export class Maze {
    constructor(pacMan) {
      this.pacMan = pacMan
    }

    movePacMan(){
      this.pacMan.changeDirection()
    }
  }