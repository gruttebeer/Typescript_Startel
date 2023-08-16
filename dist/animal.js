"use strict";
class Animal {
    constructor(name, _energy) {
        this.name = name;
        this._energy = _energy;
        this.kind = "";
        this.energy = _energy;
    }
    get description() {
        return `${this.name} - ${this.energy} - ${this.kind}`;
    }
    get energy() {
        return this._energy;
    }
    set energy(value) {
        if (value < 100)
            this._energy = value;
        else
            this._energy = 100;
    }
    eat() {
        this.energy += 10;
    }
    live() {
        this.energy--;
    }
    toHTML() {
        let div = document.createElement("div");
        div.className = "animal";
        div.classList.add(this.kind);
        if (this.energy < 5)
            div.classList.add("warning");
        let h3 = document.createElement("h3");
        h3.innerHTML = this.name;
        div.append(h3);
        let img = document.createElement("img");
        img.src = "images/" + this.kind + ".jpg";
        img.height = 200;
        img.width = 200;
        div.append(img);
        let p = document.createElement("p");
        p.innerHTML = this.energy.toString();
        div.append(p);
        let btn = document.createElement("button");
        btn.innerHTML = "feed";
        div.append(btn);
        btn.onclick = () => {
            this.eat();
            showAnimals();
        };
        return div;
    }
}
Animal.maxEnergy = 100;
class Monkey extends Animal {
    constructor(name = "CrystalTheMonkey", energy = 100) {
        super(name, energy);
        this.kind = "monkey";
    }
    climbTree() {
        console.log("I am climbing my tree and I am happy......");
    }
    eat() {
        this.energy += 5;
    }
}
class Lion extends Animal {
    constructor(name = "ManicMania", energy = 1000000) {
        super(name, energy);
        this.kind = "lion";
    }
    roarrrr() {
        console.log("Grrrrrrrr!!!");
    }
}
class Elephant extends Animal {
    constructor(name = "NevarForget", energy = 1000000) {
        super(name, energy);
        this.kind = "elephant";
    }
    fly() {
        console.log("Wheeeee!!!");
    }
}
