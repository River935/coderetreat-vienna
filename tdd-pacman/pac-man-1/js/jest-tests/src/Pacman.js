

export class Pacman{
    constructor(){
        this.alive = true;
        this.poweredUp = false;
        this.time = 0;
        this.powerUpTime = null;
        this.direction = "UP";
    }

    isAlive(){
        return this.alive;
    }

    hitGhost(){
        this.alive = false;
    }

    isPoweredUp(){
        return this.poweredUp;
    }

    ateBigDot(){
        this.powerUpTime = this.time;
        this.poweredUp = true;
    }

    tick(){
        this.time++;
        const timeSincePowerUp = this.time - this.powerUpTime
        if(timeSincePowerUp >= 15){
            this.poweredUp = false;
        }
    }

    isMoving() {
        return this.isAlive();
    }

    getDirection() {
        return this.direction;
    }
}