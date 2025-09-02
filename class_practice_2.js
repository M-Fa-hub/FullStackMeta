


const car2 = {
    speed: 200,
    color: "red",
    lightsstatus: true,
    toggleLights() {
        this.lightsstatus = !this.lightsstatus;
    }
};




console.log(Object.keys(car2));
console.log(Object.values(car2));
console.log(Object.entries(car2));

// var testt = true
// console.log("testt:", testt)

// testt = swithing(testt)
// console.log("testt:", testt)