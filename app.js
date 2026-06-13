let mode = "computer";
const choices = ["Rock", "Paper", "Scissors"];

let p1score = 0;
let p2score = 0;

let firstChoice = null;

function setMode(m) {
    mode = m;
    firstChoice = null;
    // Show we play against computer or Player 2
    document.getElementById("choice").innerHTML =
        mode === "computer"
            ? "Play against Computer"
            : "Player 1 Turn";
    // Reset status when mode change
    document.getElementById("status").innerHTML = "";
    // Show we play against computer or Player
    document.getElementById("label").innerHTML =
        mode === "computer"
            ? "Computer"
            : "Player 2";
}


function play(choice) {

    if (mode === "computer") {

        // Generate computer choice correctly
        let randomIndex = Math.floor(Math.random() * choices.length);
        let computer = choices[randomIndex];
        
        // Show result after move
        document.getElementById("choice").innerHTML =
            "You : " + choice + "<br> Computer : " + computer;

        winner(choice, computer);
    }

    else {

        if (firstChoice === null) {
            firstChoice = choice;
            document.getElementById("choice").innerHTML = "Player 2 Turn";
        } 
        else {
            document.getElementById("choice").innerHTML = "Player 1 : " + firstChoice + "<br> Player 2 : " + choice;
            winner(firstChoice, choice);
            firstChoice = null;
        }
    }
}

function winner(a, b) {
    // Check if any input is null
    if (!a || !b) {
        document.getElementById("status").innerHTML = "Error! Try Again";
        return;
    }

    // Check if Draw
    if (a === b) {
        document.getElementById("status").innerHTML = "🤝 Draw";
        return;
    }

    // Check if Player 1 wins
    if ( (a === "Rock" && b === "Scissors") || (a === "Paper" && b === "Rock") || (a === "Scissors" && b === "Paper") ) {
        document.getElementById("status").innerHTML = "🎉 Player 1 Wins";
        p1score++;
    } 
    else {
        document.getElementById("status").innerHTML = mode === "computer" ? "💻 Computer Wins" : "🎉 Player 2 Wins";
        p2score++;
    }

    document.getElementById("p1").innerHTML = p1score;
    document.getElementById("p2").innerHTML = p2score;
}