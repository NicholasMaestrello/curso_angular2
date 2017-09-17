"use strict";
/*let message: string = "Help me please"
console.log(message)

let episode: number = 4
console.log("Episode"+4)
episode = episode + 1
console.log("Next episode "+ episode)

let favoriteDroid: string
favoriteDroid = 'BB-8'
console.log('My favorite droid is ' + favoriteDroid)

let isEnoughToBeatMF = function (parsecs: number) : boolean{
    return parsecs < 12
}

let distance = 15
console.log(`Is ${distance} parsecs to bear Mellenniun falcon ? ${isEnoughToBeatMF(distance) ? "sim": "nao"}`)

let call = (name: string) => console.log(`Do you copy, ${name}`)
call('R2')

function inc (speed: number, inc: number = 1): number {
    return speed + inc
}

console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)
*/
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
var ship = new base_ships_1.Spacecraft('Hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.Millenniumfalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainer > 2; };
console.log("Is falcon good for the job ? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
