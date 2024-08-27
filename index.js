// 8/21/24
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion:{
            name: "frank",
            type: "Flea",
            inventory:["small hat","Sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

adventurer.roll();
adventurer.roll();
adventurer.roll();
adventurer.roll();
adventurer.roll();

class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
    static MAX_HEALTH=100;
}
//part2
const robin = new Character(adventurer.name);
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);
robin.roll();
console.log(robin.companion);
robin.companion.roll();
console.log(robin.companion.companion);
robin.companion.companion.roll();

//part 3
class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    static ROLES=["Fighter", "Healer", "Wizard"];
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    intimdate(){
        console.log(`${this.name} can intimate enemy`);
        super.roll();
    }
    
}
class Companion extends Character{
    constructor (name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every Companions starts with a snack and 25 gold coins.
        this.inventory.push("snack", "25 gold coins");
    }
    nightvision(){
        console.log(`${this.name} see in the dark up to 20 feet away`);
        super.roll();
    }
    stealth(){
        console.log(`${this.name} can move without making noise. `)
    }
    jump(){
        console.log(`${this.name} can jump 10ft high`);
        super.roll();
    }
    bloodsuck(){
        console.log(`${this.name} suck your blood ...`);
        super.roll();
    } 
}
const advRobin = new Adventurer(robin.name,"leader");
console.log(advRobin);
const Leo = new Companion(robin.companion.name,"scout");
console.log(Leo);
const Frank = new Companion(robin.companion.companion.name,"scout");
console.log(Frank);

//part5

class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
}
const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");









/*adventurer.inventory.forEach((a)=>{
    console.log(a);
});*/