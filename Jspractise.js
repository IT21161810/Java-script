

const arr = ["benz","bmw"] //prototype create each every function object array created

const object = {
    name:"jaguar",
    color:"black",
    gteIntro: function(){
        console.log(this.name + " from " + this.color)
    }
}

const object2 = {
    brand:"Alto"
}

object2.__proto__ = object

const person = {
    alive:true
}

const musician = {
    plays:true
}

Object.setPrototypeOf(musician,person)
console.log(Object.getPrototypeOf(musician))

window.name = "Firefox"

function printName() {
    console.log(this.name)
}

const chromes = {
    name:'Chrome',
    print:printName
}

printName()
chromes.print()

class Vehicle  {
    color ='black'
}

class Car  {
    carName ="benz"
}

Car.prototype.getCar = function(){
    console.log('Hello')
}

Car.prototype =  Vehicle.prototype;
const car = new Car();
car.getCar()

const getData = () => {
    
}