class Animal {

    static maxEnergy = 100;

    kind = "";

    constructor(public name: string, private _energy: number) {
        this.energy = _energy;
    }

    get description() : string
    {
        return`${this.name} - ${this.energy} - ${this.kind}`;
    }

    get energy(): number {
        return this._energy;
    }

    set energy(value: number) {
        if (value < 100)
            this._energy = value;
        else
            this._energy = 100;
    }

    eat() { // Dit roept de set aan
        this.energy += 10;
    }

    live() {
        this.energy--;
    }

    toHTML(): HTMLDivElement {
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

        // Gebruik bij de onclick event een arrow function (vanuit het voorbeeld: function this.eat)
        btn.onclick = () => {
            this.eat();
            showAnimals();
        };

        return div;
    }
}

class Monkey extends Animal {
    constructor(name: string = "CrystalTheMonkey", energy: number = 100) {
        // 'super' is de base class van Monkey: Animal
        super(name, energy);
        this.kind = "monkey";
    }
    climbTree() {
        console.log("I am climbing my tree and I am happy......")
    }

    eat() {
        this.energy += 5;
    }
}

class Lion extends Animal {
    constructor(name: string = "ManicMania", energy: number = 1000000) {
        // 'super' is de base class van Lion: Animal
        super(name, energy);
        this.kind = "lion";
    }
    roarrrr() {
        console.log("Grrrrrrrr!!!")
    }
}

class Elephant extends Animal {
    constructor(name: string = "NevarForget", energy: number = 1000000) {
        // 'super' is de base class van Elephant: Animal
        super(name, energy);
        this.kind = "elephant";
    }
    fly() {
        console.log("Wheeeee!!!")
    }

// class tiger extends Animal {

// }
}