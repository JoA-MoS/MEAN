class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(this.health, this.speed, this.strength);
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    showStats() {
        super.showStats();
        console.log(this.wisdom);
    }

    speakWisdom() {
        this.drinkSake();
        console.log("a wise message");
    }
}


let ninja = new Ninja("Testing");

ninja.sayName();
ninja.showStats();

let sensei = new Sensei("Sensei");
sensei.sayName();
sensei.showStats();
sensei.speakWisdom();
