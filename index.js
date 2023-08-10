function game() {
    // RANDOM NUMBER GENERATIONvar randomNumber;
    function randomNumberGenerater() {
        randomNumber = Math.floor(Math.random() * 100 + 1);
        // console.log(randomNumber);
    }
    document.querySelector(".reload").style.visibility = "hidden";
    randomNumberGenerater();
    // INITIALIZING SCORE
    var a = 0;
    // NUMBER INSERTION AND CHECKING
    document.querySelector("#button-addon2").addEventListener("click", function () {
        let userChosenNumber = document.querySelector(".form-control-file").value;
        Number.parseInt(userChosenNumber);
        a++;
        if (userChosenNumber == randomNumber) {
            document.querySelector(".hint").innerHTML = "Right answer!";
            document.querySelector("#chances").innerHTML = "Your score is " + Number(100-a);
            document.querySelector(".reload").style.visibility = "visible";
            document.querySelector(".reload").addEventListener("click", ()=> {
                location.reload();
            })            
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

