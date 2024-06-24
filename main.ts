#! /usr/bin/env node

import inquirer from "inquirer"

//for Player1:
class Player1 {
    name : string;
    health = 100;

    constructor(name: string){
        this.name = name
    }
decreaseHealth() {
    this.health -= 20

    }

increaseHealth() {
    this.health = 100
}   

}

//for Player2:
class Player2 {
    name : string;
    health = 100;

    constructor(name: string){
        this.name = name
    }
decreaseHealth() {
    this.health -= 20

    }

increaseHealth() {
    this.health = 100
}   

}

//step 2 Player1 Object:
async function main() {
const { player1Name } = await inquirer.prompt([
    {
        type: "input",
        name: "player1Name",
        message: "Enter your Player1 Name:"
    }
]);


//player2 object:
const { player2Type} = await inquirer.prompt([
    {
        type : "list",
        name : "player2Type",
        choices : ["rock", "bruceli", "john"],
        message : "select the player2 you fight with:"
    }
]);

//step 3 battle field:
const player1 = new Player1 (player1Name);
const player2 = new Player2 (player2Type);

console.log(`${player2.name} v/s ${player1.name}`)


//step 4 action
do {
    const { action } = await inquirer.prompt([
        {
            type : "list",
            name : "action",
            choices : ["attack", "defend", "run"],
            message : "chooose your action",     
        }
    ]);



// step 5 switch case:
switch (action) {
    case "attack":
        const randomNum = Math.random();
        if (randomNum > 0.5) {
            player1.decreaseHealth();
            console.log(`${player1.name} health: ${player1.health}`);
            console.log(`${player2.name} health: ${player2.health}`);
            if(player1.health <= 0) {
                console.log("you loss! try again")
                return
            }
            } else {
                //player2 health:
                player2.decreaseHealth()
                player2.decreaseHealth();
                console.log(`${player1.name} health: ${player1.health}`);
                console.log(`${player2.name} health: ${player2.health}`);
                if(player1.health <= 0) {
                console.log("congratulations! You Won")
                return
            }
        }
        break;
        }
    }while (true);

}
main();