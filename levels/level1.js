const level1 = new Level(
    enemies1 = [

        new PufferFish(1200, 100),
        new PufferFish(800, 120),
        new PufferFish(2400, 150),
        new PufferFish2(2000, 170),
        new PufferFish2(1600, 100),
        new PufferFish2(600, 220),
        new PufferFish3(400, 100),
        new PufferFish3(1000, 220),
        new PufferFish3(1400, 150),
    ],
    enemies2 = [
        new JellyFish(1200, 270),
        new JellyFish(1800, 270),
        new JellyFish(2400, 270),
        new JellyFish2(1000, 330),
        new JellyFish2(600, 330),
        new JellyFish2(2000, 330),

    ],

    endboss = [
        new Endboss(3000, 30)
    ],

    backGround = [

        new BackgroundObject('img/3. Background/Dark/2.png', -720),
        new BackgroundObject('img/3. Background/Dark/1.png', 0),
        new BackgroundObject('img/3. Background/Dark/2.png', 720),
        new BackgroundObject('img/3. Background/Dark/1.png', 2 * 720),
        new BackgroundObject('img/3. Background/Dark/2.png', 3 * 720),
        new BackgroundObject('img/3. Background/Dark/1.png', 4 * 720),
        new BackgroundObject('img/3. Background/Dark/2.png', 5 * 720),
        new BackgroundObject('img/3. Background/Dark/1.png', 6 * 720),
    ],

    life = [

        new Life(1400,75),
        new Life(2700,150)
    ],

    coins = [
        new Coins(500,100),
        new Coins(750,300),
        new Coins(1000,150),
        new Coins(1500,250),
        new Coins(2000,200),
    ],

    poisen = [
        new Poisen(170,375),
        new Poisen(670,375),
        new Poisen(1300,375),
        new Poisen(2000,375),
        new Poisen(2500,375)
    ]
);