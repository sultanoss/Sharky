class ThrowableObjects1 extends MovableObjects {
    speed = 15;
    constructor(x, y) {

        super().loadImg('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.throw();
    }

    throw() {
        setInterval(() => {
            this.moveRight();
        }, 100);
    }
}