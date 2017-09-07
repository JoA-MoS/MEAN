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



function merge(arr1, arr2) {
    let merged = [];
    let p1 = 0;
    let p2 = 0;
    while (p1 < arr1.length || p2 < arr2.length) {
        let v1 = arr1[p1] != null ? arr1[p1] : Infinity;
        let v2 = arr2[p2] != null ? arr2[p2] : -Infinity;
        console.log(v1, v2)
        if (v1 <= v2) {
            merged.push(arr1[p1]);
            p1++;
        }
        else {
            merged.push(arr2[p2]);
            p2++;
        }
    }
    return merged;
}


var a = [-2, 6];
var b = [6]
console.log(merge(a, b));
