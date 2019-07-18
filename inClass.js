//Quick objects review calling by using Node.js >>> node inClass.js
/* const dog = {
    raining : true,
    noise: "woof",
    makeNoise: function (){
        if(this.raining === true){
        console.log(this.noise)
        }
    }
}
dog.makeNoise();

const cat = {
    raining : false,
    noise: "Meow!",
    makeNoise: function (){
        if(this.raining === false){
        console.log(this.noise)
        }
    }
}
cat.makeNoise();

cat.raining = true;

function massHysteria(cat,dog){
    if(cat.raining === true && dog.raining ===true){
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!")
    }
}
massHysteria(cat,dog); */




//Constructor to create simple Roleplaying Game
/*
Each character created using your constructor should have the following properties...

Name: The character's name --> String

Profession: What the character does for a living --> String

Gender: The character's gender --> String

Age: The character's age --> Integer

Strength: Abstraction for how strong the character is --> Integer

HitPoints (HP): Abstraction for how much health the character has --> Integer

PrintStats: Function which prints all of a character's properties to the screen

Once you have created your constructor, create two new characters and print their properties to the screen

Fool around and get comfortable with your constructor before moving onto the next parts of the activity
Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...

IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.

Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.

LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.
*/

/* function RolePlayingGame(name,profession,gender,age,strength,hitpoint){
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = parseInt(age);
    this.strength = parseInt(strength);
    this.hitpoints = parseInt(hitpoint);
    this.printStats = function(){
        console.log("name: " + this.name + " " +"profession: " + this.profession + " " +
        "gender: " + this.gender + " " +"age: " + this.age + " " +"strength: " + 
        this.strength + " " + "hitpoints: " + this.hitpoints)
    }
    this.IsAlive = function(){
        if(this.hitpoints > 0){
            console.log("hitpoints = " + this.hitpoints + " "+ "He is alive!!!")
        }
        else{
            console.log("hitpoints = " + this.hitpoints + " "+ "He is dead!!!")
        }
    }
    this.Attack = function(){
        console.log(this);
    }
}

let goku = new RolePlayingGame("goku","saiyan","male",21,420,-45);
let vegeta = new RolePlayingGame("vegeta","saiyan","male",23,420,100);

goku.IsAlive();
vegeta.printStats(); */






/*
Create a constructor called "DigitalPal" which will create four properties and four methods...

The first property is "hungry" and it initially starts out as false

The second property is "sleepy" and it initially starts out as false

The third property is "bored" and it initially starts out as true

The fourth property is "age" and it initially starts out at 0

The first method is "feed()" - If hungry is true, print "That was yummy!", set hungry to false, and then set sleepy to true. If hungry is false, print "No thanks! I'm full."

The second method is "sleep()" - If sleepy is true, print Zzzzzzzz, set sleepy to false, then set bored to true, and then run increaseAge(). If sleepy is false, print "No way! I'm not tired."

The third method is "play()" - If bored is true, print "Yay! Let's play!", set bored to false, and then set hungry to true. If bored is false, print "Not right now. Later?"

The fourth method is "increaseAge()" - This method runs within the sleepy() method when the DigitalPal goes to sleep and increases the DigitalPal's age by one while also printing "Happy Birthday to me! I am "+age+" old!"

Create a variable named "Dog" that is set to a new DigitalPal before adding the following unique properties/methods to it...

Outside - Initially set to false

Bark() - Prints out "Woof! Woof!" when run

goOutside() - If outside is false, prints "Yay! I love the outdoors!", sets outside to true, and runs Bark(). If outside is true, prints "We're already outside though..."

goInside() - If outside is true, prints "Do we have to? Fine..." and sets outside to false. If outside is false, prints "I'm already inside..."

Make a second variable named "Cat" that is set to a new DigitalPal and add the following methods to it:

HouseCondition - Initially set to 100... But not for long...

meow() - prints out "Meow! Meow!" when run

destroyFurniture() - Lowers HouseCondition by 10 and prints MUAHAHAHAHA! TAKE THAT FURNITURE! to the screen. Also sets bored to false and sleepy to true. If HouseCondition is equal to 0, then this should not run anymore.

buyNewFurniture() - Raises HouseCondition by 50 and prints "Are you sure about that?" to the screen.

*/



function DigitalPal(hungry,sleepy,bored,age){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed = function (){
        if(this.hungry === true){
            console.log("That was Yummy!")
            this.hungry = false;
            this.sleepy = true;
        }
        if(this.hungry === false){
            console.log("No thanks bro! I'm full")
        }
    }

    this.sleep = function(){
        if(this.sleep === true){
            console.log("Zzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }
    }

    this.play = function(){
        if(this.bored === true){
            console.log("Lets play! Since you are bored");
            this.bored = false;
            this.hungry = true;
        }
        if(this.bored ===false){
            console.log("Not right now! I am not bored");
        }
    }
    //this will run inside sleep method
    this.increaseAge = function(){
        this.age++;
        console.log("Happy bday! You are now this old: " + this.age);
    }
   
}
// creates a new "digitalpal" object with the name "dog"
let dog = new DigitalPal;

dog.outside = false;
dog.bark = function(){
    console.log("Woof! Woof!");
}
dog.goOutside = function(){
    if(dog.outside ===false){
        console.log("Yay i love the outdoors because dog.outside is false");
        dog.outside = true;
        dog.bark();
    }
    else{
        console.log("I already outside dog.outside is true bro");
    }
}

