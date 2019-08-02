// dependency for inquirer npm package
var inquirer = require("inquirer");
/*
Start out by creating a constructor function called "Player" with the following properties and methods...

name: Property which contains the player's name
position: Property which holds the player's position
offense: Property which is a value between 1 and 10 to show how good this player is on offense
defense: Property which is a value between 1 and 10 to show how good this player is on defense
goodGame: Method which increases either the player's offense or defense property based upon a coinflip.
badGame: Method which decreases either the player's offense or defense property based upon a coinflip.
printStats: Method which prints all of the player's properties to the screen
Now create a program which allows the user to create 2 unique players. It should take as user input the name, position, offense, and defense of each player.

Once all of the players have been created, print their stats.
*/
function TeamManager(name,position,offense,defense,){
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function(){
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense++;
            console.log(this.name + "'s offense has gone up!\n----------");
          }
          else {
            this.defense++;
            console.log(this.name + "'s defense has gone up!\n----------");
          }
        };
    
    this.badGame = function(){
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense--;
            console.log(this.name + "'s offense has gone down!\n----------");
          }
          else {
            this.defense--;
            console.log(this.name + "'s defense has gone down!\n----------");
          }
        };
    
    this.printStats = function(){
        console.log("name:"+this.name + " "+ "position:"+this.position + " "+"offense:"+ this.offense + " "+ "defense:"+ this.defense)
    }

    this.playGame = function (){
        //number to compare to offense
        let randomNumber1 = Math.floor(Math.random() * Math.floor(20));
        console.log(this.offense);
    
        //number to compare to defense
        let randomNumber2 = Math.floor(Math.random() * Math.floor(20));
        console.log(this.defense);
      };
}


let count = 0;
let starters = [];
let subs = [];
let team = [];
addPlayers();

function addPlayers(){
    if(count < 5){
            inquirer.prompt([
            {
            name: "name",
            message: "What is the name?"
            }, {
            name: "position",
            message: "What is the position?"
            }, {
            name: "offense",
            message: "What is the offense rating 1-10?"
            }, {
            name: "defense",
            message: "What is the defense rating 1-10?"
            }
        ]).then(function(answers) {
            // initializes the variable newPlayer to be a TeamManager object which will take
            // in all of the user's answers to the questions above
            let newPlayer = new TeamManager(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
            // printInfo method is run to show that the newPlayer object was successfully created and filled
            if(starters.length<3){
                starters.push(newPlayer);
                team.push(newPlayer);
            }
            else{
                subs.push(newPlayer);
                team.push(newPlayer); 
            }
              
            count++;
            addPlayers();
        });
    }
    else{
        console.log("\n------------Your team is! ----------------:\n")
        for(let i=0;i<team.length;i++){
            team[i].printStats();
        }
        console.log("\n------------Your 3 starters are! ----------------:\n")
        for(let i=0;i<starters.length;i++){
            starters[i].printStats();
        }
        console.log("\n------------Your 2 subs are! ----------------:\n")
        for(let i=0;i<subs.length;i++){
            subs[i].printStats();
            team[i].playGame();
        }
        
    }
    
}
