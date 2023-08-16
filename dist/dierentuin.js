"use strict";
let zoo = [];
setInterval(gameTick, 1000);
function gameTick() {
    zoo.forEach(a => a.live());
    showAnimals();
}
function createMonkey() {
    let m = new Monkey("CrystalTheMonkey", 10);
    zoo.push(m);
    showAnimals();
}
function createLion() {
    let m = new Lion("ManicMania", 10);
    zoo.push(m);
    showAnimals();
}
function createElephant() {
    let m = new Elephant("NevarForget", 10);
    zoo.push(m);
    showAnimals();
}
function levelUp() {
    Animal.maxEnergy += 10;
}
function showAnimals() {
    let output = document.getElementById("output");
    output.innerHTML = "";
    zoo = zoo.filter(a => a.energy >= 0);
    for (let a of zoo) {
        if (a.energy >= 0)
            output.append(a.toHTML());
    }
}
