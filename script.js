let min = 1;
let max = 10;
let guessNum = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;
let message = document.querySelector("#hint");

function checkGuess() {
    const input = document.querySelector("#inp");
    const userNum = parseInt(input.value, 10);
    attempts++;

    if (isNaN(userNum)) {
        alert(" Please input a valid number between 1 and 10");
        return;
    }
    if (userNum > 10 || userNum < 1){
          alert(" Please input a valid number between 1 and 10");
        return;
    }
    if (userNum === guessNum) {
        message.innerHTML = ` Congratulations! You guessed the number in ${attempts} tries.`;
        input.disabled = true; 
        document.querySelector("#btn").disabled = true; 
        document.querySelector("#resetBtn").style.display = "block"; 

        // Reset game when reset button is clicked
        document.querySelector("#resetBtn").addEventListener("click", () => {
            guessNum = Math.floor(Math.random() * (max - min + 1)) + min;
            attempts = 0;
            message.innerHTML = "";
            input.value = "";
            input.disabled = false;
            document.querySelector("#btn").disabled = false;
            document.querySelector("#resetBtn").style.display = "none";
        });
    } else if (userNum > guessNum) {
        message.innerHTML = `Too high! Try again.`;
    } else {
        message.innerHTML = `Too low! Try again.`;
    }
}