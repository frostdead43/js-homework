
let playerMove = prompt("Your Move");

let computerMove = ["rock", "paper","scissors"].at(Math.floor(Math.random() * 3));


if (playerMove === computerMove ) {
    console.log ("Draw!");
} else if (
    (playerMove === "rock" && computerMove === "scissors") || 
    (playerMove === "scissors" && computerMove === "paper") ||
    (playerMove === "paper" && computerMove === "rock"))  {
    console.log("Fatality!");
} else if (
    (computerMove === "rock" && playerMove === "scissors") ||
    (computerMove === "scissors" && playerMove === "paper") ||
    (computerMove === "paper" && playerMove === "rock")) {
    console.log("Computer win!");

} else {
    console.log("Invalid Move!")
}


        

    
     

    