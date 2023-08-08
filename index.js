function game() {
    // RANDOM NUMBER GENERATIONvar randomNumber;
    function randomNumberGenerater() {
        randomNumber = Math.floor(Math.random() * 10 + 1);
        console.log(randomNumber);
    }
    randomNumberGenerater();

    // NUMBER INSERTION AND CHECKING
    var userChosenNumber
    document.querySelector("#button-addon2").addEventListener("click", function () {
        userChosenNumber = document.querySelector(".form-control-file").value;
        Number.parseInt(userChosenNumber);

        if (userChosenNumber == randomNumber) {
            document.querySelector(".hint").innerHTML = "Right answer!";

        }
        else if (userChosenNumber > randomNumber) {
            document.querySelector(".hint").innerHTML = "The number is less than " + userChosenNumber;
        }
        else if (userChosenNumber < randomNumber) {
            document.querySelector(".hint").innerHTML = "The number is greater than " + userChosenNumber;
        }
    })

}
game();







