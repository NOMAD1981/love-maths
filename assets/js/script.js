// wait for the dom to finish loading before running the game
// Get the button elements and add event listeners to them

// add listener to wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    // more modern, cleaner version of for (let i = 0; i < buttons.length; i++)
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                // note template literal used | backquotes, not apostrophes or backquotes
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAdditionQuestion() {
    
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}

// function displayDivideQuestion() {
    
// }