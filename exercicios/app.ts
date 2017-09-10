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
class Spacecraft {
    constructor (public propulsor: string){}

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

let ship = new Spacecraft('Hyperdrive')
ship.jumpIntoHyperspace()

class Millenniumfalcon extends Spacecraft implements Containership{

    cargoContainer: number

    constructor(){
        super('Hyperdrive')
        this.cargoContainer = 2
    }

    jumpIntoHyperspace(){
        if (Math.random() >=0.5){
            super.jumpIntoHyperspace()
        }else {
            console.log('Failed to jump to hyperspace')
        }
    }
}

let falcon = new Millenniumfalcon()
falcon.jumpIntoHyperspace()

interface Containership {
    cargoContainer: number
}

let goodForTheJob = (ship: Containership) => ship.cargoContainer > 2
console.log(`Is falcon good for the job ? ${goodForTheJob(falcon) ? 'YES': 'NO'}`)