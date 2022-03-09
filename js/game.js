let canvas;
let ctx; // standart variable um canvas zu malen
let world;
let keyboard = new Keyboard();


function init() {

    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('instructions').classList.add('d-none');
    document.getElementById('instructions-text').classList.add('d-none');
    document.getElementById('canvas').classList.add('d-block');
    document.getElementById('all-mobile-controls').classList.remove('d-none');
    document.getElementById('logo').classList.add('margin');
}


function restartGame() {

    window.location.reload();
}



window.addEventListener("keydown", (e) => {

    if (e.keyCode == 39) {

        keyboard.RIGHT = true;
    }

    if (e.keyCode == 37) {

        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {

        keyboard.UP = true;
    }

    if (e.keyCode == 40) {

        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {

        keyboard.SPACE = true;
    }

    if (e.keyCode == 68) {

        keyboard.D = true;
    }

    if (e.keyCode == 83) {

        keyboard.S = true;
    }

});


window.addEventListener("keyup", (e) => {

    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 37) {

        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {

        keyboard.UP = false;
    }

    if (e.keyCode == 40) {

        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {

        keyboard.SPACE = false;
    }

    if (e.keyCode == 68) {

        keyboard.D = false;
    }

    if (e.keyCode == 83) {

        keyboard.S = false;
    }

});

function up() {

    keyboard.UP = true;
}

function stopUp() {

    keyboard.UP = false;
}

function down() {

    keyboard.DOWN = true;
}

function stopDown() {

    keyboard.DOWN = false;
}

function right() {

    keyboard.RIGHT = true;
}

function stopRight() {

    keyboard.RIGHT = false;
}

function left() {

    keyboard.LEFT = true;
}

function stopLeft() {

    keyboard.LEFT = false;
}

function D() {

    keyboard.D = true;
}

function stopD() {

    keyboard.D = false;
}

function space() {

    keyboard.SPACE = true;
}

function stopSpace() {

    keyboard.SPACE = false;
}
