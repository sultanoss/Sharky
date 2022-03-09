class circle {

    constructor() {
        this.x = Math.random() * canvas2.width;
        this.y = Math.random() * canvas2.height;
        this.size = Math.random() * 7 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.8;
    }

    update() {

        this.x += this.speedX;
        this.y += this.speedY;
    }

    drawCircle() {

        ctx2.fillStyle = 'hsl(' + hue + ' ,100% ,50%)';
        ctx2.beginPath();
        ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx2.fill();

    }
}


function animatedCircles() {

    for (let i = 0; i < 200; i++) {
        allCircles.push(new circle());
    }
    addCircles();
}

function addCircles() {
    for (let i = 0; i < 50; i++) {
        setInterval(() => {
            allCircles.push(new circle());
        }, 15000);

    }
}



function createCircles() {

    for (let index = 0; index < allCircles.length; index++) {
        const element = allCircles[index];
        element.update();
        element.drawCircle();

    }
}

function animate() {

    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    createCircles();
    hue += 0.5;
    requestAnimationFrame(animate);
}




function animatedBgr() {

    animatedCircles();
    animate();
}
