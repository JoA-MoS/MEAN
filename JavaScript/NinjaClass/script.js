function Ninja(name) {
    var speed = 3;
    var strength = 3;
    this.Health = 100;
    this.Name = name;

    this.getStrength = function () {
        return strength;
    }

    this.getSpeed = function () {
        return speed;
    }
}

Ninja.prototype.sayName = function () {
    // Ninja.prototype.sayName = () => {    
    console.log(this.Name);
    return this;
}


Ninja.prototype.showStats = function () {
    console.log(`Strength:  ${this.getStrength()}`);
    console.log(`Speed:  ${this.getSpeed()}`);
    console.log(`Strength:  ${this.Health}`);
    return this;
}

Ninja.prototype.drinkSake = function () {
    this.Health += 10;
    return this;
}


var n = new Ninja("Justin");

n.sayName();
n.drinkSake();
n.showStats();
