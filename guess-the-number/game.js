const againbutton = document.querySelector(".again");
const num = document.querySelector(".number");
const guess = document.querySelector(".guess");
const checkbtn = document.querySelector(".btn"); // Fixed selector
const message = document.querySelector(".message");
const scoreValue = document.querySelector(".score-value"); // Update only the value
const highscoreValue = document.querySelector(".highscore-value"); // Update only the value

let random = Math.trunc(Math.random() * 20) + 1;
let scores = 20;
let highScore = 0;
console.log(random);

const checkfunc = () => {
    const guessnum = Number(guess.value);
    if (!guessnum) {
        message.textContent = "User has not entered anything";
    } else if (guessnum === random) {
        message.textContent = "win!";
        num.textContent = random;
        document.querySelector("body").style.backgroundColor = "green";
        if (scores > highScore) {
            highScore = scores;
            highscoreValue.textContent = highScore;
        }
    } else if (guessnum < random) {
        if (scores > 1) {
            scores -= 1;
            scoreValue.textContent = scores;
            message.textContent = "Number is too low";
        } else {
            message.textContent = "Game over!";
            scoreValue.textContent = 0;
        }
    } else if (guessnum > random) {
        if (scores > 1) {
            scores -= 1;
            scoreValue.textContent = scores;
            message.textContent = "Number is too high";
        } else {
            message.textContent = "Game over!";
            scoreValue.textContent = 0;
        }
    }
};

checkbtn.addEventListener("click", checkfunc);

const againfunc = () => {
    document.querySelector("body").style.backgroundColor = "black";
    random = Math.trunc(Math.random() * 20) + 1;
    scores = 20;
    scoreValue.textContent = scores;
    num.textContent = "?";
    message.textContent = "Start guessing...";
    guess.value = "";
};

againbutton.addEventListener("click", againfunc);