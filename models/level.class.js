class Level {
    enemies1;
    enemies2;
    endBoss;
    background;
    life;
    coins;
    poisen;
    levelEnd = 3000;

    constructor(enemies1,enemies2,endBoss,background,life,coins,poisen){

        this.enemies1 = enemies1;
        this.enemies2 = enemies2;
        this.endBoss = endBoss;
        this.background = background;
        this.life = life;
        this.coins = coins;
        this.poisen = poisen;

    }
}