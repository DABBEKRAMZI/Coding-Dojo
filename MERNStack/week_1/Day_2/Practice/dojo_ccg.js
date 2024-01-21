class unitCards {
    constructor(name,cost,power,resilience){
        this.name = name
        this.cost = cost
        this.power = power
        this.resilience = resilience
    }
}

class effectCards {
    constructor(name,cost,text,stat,){
        this.name = name
        this.cost = cost
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }
}
const redBeltNinja = new unitCards("redBeltNinja",3,3,4)
const BlackBeltNinja = new unitCards("BlackBeltNinja",4,5,4)
const hardAlgorithm = new effectCards("hardAlgorithm",2,"increase target's resilience by 3","resilience" ,+3)
const UnhandledPromiseRejection = new effectCards("UnhandledPromiseRejection",1,"reduce target's resilience by 2","resilience" ,-2)
const PairProgramming = new effectCards("harPairProgramming",3,"increase target's power by 2","resilience" ,+2)
console.log(redBeltNinja)