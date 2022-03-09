class MovableObjects extends DrawableObject {


    isColliding(mo) { // collusionscheck funktion

        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit1() {

        this.energy -= 7;
        if (this.energy < 0) {

            this.energy = 0;
        } else {

            this.lastHit = new Date().getTime();
        }
    }

    hit2() {

        this.energy -= 25;
        if (this.energy < 0) {

            this.energy = 0;
        } else {

            this.lastHit = new Date().getTime();
        }
    }


    hitObjeckt() {

        this.energy2 += 21;
        if (this.energy2 > 100) {

            this.energy2 = 100;
        }
    }

    hitObjeckt2() {

        this.energy3 += 21;
        if (this.energy3 > 100) {

            this.energy3 = 100;
        }
    }




    isDead() {

        return this.energy == 0;

    }

    isHurt() {

        let timePassed = new Date().getTime() - this.lastHit; // Zeitdifferenz in ms(millisekunden)
        timePassed = timePassed / 1000 // zeitdiffernz in secunden
        return timePassed < 0.8;
    }


    moveRight() {

        this.x += this.speed;

    }

    moveLeft() {

        this.x -= this.speed;
    }

    moveUp() {
        if (this.y > -5) {
            this.y -= this.speed;
        }
    }
    moveUp2(){

        this.y -= this.speed;
    }

    moveDown() {
        if (this.y < 280) {
            this.y += this.speed;
        }
    }
}