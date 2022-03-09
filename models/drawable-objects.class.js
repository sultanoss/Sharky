class DrawableObject {

    x = 100;
    y = 160;
    img;
    width = 50;
    height = 50;
    speed = 0.10;
    imageCache = {};
    currentImage = 0; // die stelle 0 vom array
    otherDirection = false;
    energy = 100;
    energy2 = 0;
    energy3 = 0;
    lastHit = 0;


    loadImg(path) {

        this.img = new Image();  //das gleiche wie document.getElementById('image'), <img id="image">
        this.img.src = path;
    }

    loadImages(arr) { // @param {array} arr =  arr ist eine abkürzung vom array , hier der parameter arr ist  samlung von img sources

        arr.forEach((path) => {

            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;

        });
    }

    playAnimation(images) {

        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    draw(ctx) {

        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {

        if (this instanceof Character || this instanceof PufferFish || this instanceof PufferFish2 || this instanceof PufferFish3 || this instanceof JellyFish || this instanceof JellyFish2) { // um nur die mo(movable objeckts) ein viereck zu drawen
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.0)';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}

