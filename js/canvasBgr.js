let canvas2 = document.getElementById('canvas2');
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
let ctx2 = canvas2.getContext("2d");
let allCircles = [];
let hue = 0;

window.addEventListener('resize', function () {
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;

});

let canvas3 = document.getElementById('canvas3');
let ctx3 = canvas3.getContext("2d");
let particles = [];

class Particle {

    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.size = 3;
        this.weight = 1;
    }

    update() {
        if(this.y > canvas3.height){
            this.y = 0 - this.size;
            this.weight = 1;
            this.x = Math.random() * canvas3.width;
        } 
        this.weight += 0.01;
        this.y += this.weight;
    }

    drawShapes() {

        ctx3.fillStyle = 'hsl(' + hue + ' ,50% ,50%)';
        ctx3.beginPath();
        ctx3.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx3.closePath();
        ctx3.fill();
    }
}

const particle1 = new Particle(50, 0);

function animateParticles() {
    ctx3.fillStyle = 'rgba(19,33,68,0)';
    ctx3.fillRect(0,0,canvas3.width,canvas3.height);
    particle1.update();
    particle1.drawShapes();
    hue++;
    requestAnimationFrame(animateParticles);
}

animateParticles();



