function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let vanilIce = new Icecream("vanilla");
const chocIce = new Icecream("chocolate");

console.log(vanilIce.flavor);
vanilIce.meltIt();
chocIce.meltIt();


vanilIce.flavor = "vanilla_type2";
console.log(vanilIce.flavor);

chocIce.flavor = "chocolate_type2";
console.log(chocIce.flavor);
 
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

//-----------------------------------------------------------------------------------------------
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myTrain = new Train('red', false);
var myhighSpeedTrain = new HighSpeedTrain(200, false, 'blue', true);
console.log(myhighSpeedTrain.passengers);
console.log("high speed:", myhighSpeedTrain.highSpeedOn);

myhighSpeedTrain.toggleLights();
myhighSpeedTrain.toggleLights();


myTrain.getPrototype();
myhighSpeedTrain.getPrototype();

myhighSpeedTrain.getSelf()

//-----------------------------------------------------------------------------------------------
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}



var bodyGYM = new Gym("7-21", "northwest", "southeast")

console.log(bodyGYM.stationaryBike.position)


////----------------------------------------------------------------------------------------

class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    // makeSound method takes a parameter `option`
    makeSound(option) {
        if (option) {
            super.makeSound(); // Calls the parent class's makeSound if option is true
        }
        console.log(this.houseCatSound); // Always prints the HouseCat sound
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    // makeSound method takes a parameter `option`
    makeSound(option) {
        if (option) {
            super.makeSound(); // Calls the parent class's makeSound if option is true
        }
        console.log(this.tigerSound); // Always prints the Tiger sound
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    // makeSound method takes a parameter `option`
    makeSound(option) {
        if (option) {
            super.makeSound(); // Calls the parent class's makeSound if option is true
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!"); // If canTalk is true, it talks
        }
    }
}


var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

console.log(polly.canFly)

polly.makeSound(false)
console.log(polly.color)
polly.color = "green"
console.log(polly.color)

