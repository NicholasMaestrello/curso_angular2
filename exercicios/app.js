var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
var ship = new Spacecraft('Hyperdrive');
ship.jumpIntoHyperspace();
var Millenniumfalcon = /** @class */ (function (_super) {
    __extends(Millenniumfalcon, _super);
    function Millenniumfalcon() {
        var _this = _super.call(this, 'Hyperdrive') || this;
        _this.cargoContainer = 2;
        return _this;
    }
    Millenniumfalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log('Failed to jump to hyperspace');
        }
    };
    return Millenniumfalcon;
}(Spacecraft));
var falcon = new Millenniumfalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainer > 2; };
console.log("Is falcon good for the job ? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
