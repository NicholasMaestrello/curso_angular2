import {Spacecraft, Containership} from "./base-ships"
export class Millenniumfalcon extends Spacecraft implements Containership{
    
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