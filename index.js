// INITIALIZING SCORE
var score = -1;
var yes = false;
function game() {
    // RANDOM NUMBER GENERATION
    function randomNumberGenerater() {
        randomNumber = Math.floor(Math.random() * 100 + 1);
        // console.log(randomNumber);
    }
    document.querySelector(".reload").style.visibility = "hidden";
    randomNumberGenerater();
    // NUMBER INSERTION AND CHECKING
    document.querySelector("#button-addon2").addEventListener("click", function () {
        let userChosenNumber = document.querySelector(".form-control-file").value;
        Number.parseInt(userChosenNumber);
        score++;
        if (userChosenNumber == randomNumber) {
            document.querySelector(".hint").innerHTML = "Right answer!";
            document.querySelector("#chances").innerHTML = "Your score is " + Number(10-score) + "/10";
            if(yes == true) {
                document.querySelector('#chancesLeft').innerHTML = Number(8-(score+1));
            }
            else {
                document.querySelector('#chancesLeft').innerHTML = "Chances left: " + Number(8-(score+1));
            }
            // document.querySelector('#chancesLeft').innerHTML = "Chances left: " + Number(8-(score+1));
            document.querySelector("#button-addon2").style.visibility = "hidden";
            document.querySelector(".reload").style.visibility = "visible";
            document.querySelector(".reload").addEventListener("click", ()=> {
                location.reload();
            })            
            
        }
        else {
            // CHECKS IF WE HAVE CHANCES LEFT OR NOT
            if(score == 7) {
                if(yes == true) {
                    document.querySelector('#chancesLeft').innerHTML = Number(8-(score+1));
                }
                else {
                    document.querySelector('#chancesLeft').innerHTML = "Chances left: " + Number(8-(score+1));
                }
                // document.querySelector('#chancesLeft').innerHTML = "Chances left: " + Number(8-(score+1));
                document.querySelector(".hint").innerHTML = "Game Over! :(";
                document.querySelector("#button-addon2").style.visibility = "hidden";
                document.querySelector(".reload").style.visibility = "visible";
                document.querySelector(".reload").addEventListener("click", ()=> {
                    location.reload();
                }) 
            }
            // PREVENTS INVALID INPUT
            else if(userChosenNumber > 100 || userChosenNumber <= 0) {
                document.querySelector(".hint").innerHTML = "Please enter number within the given range.";
                score--;
            }
            else {
                if(yes == true) {
                    document.querySelector('#chancesLeft').innerHTML = Number(8-(score+1));
                }
                else {
                    document.querySelector('#chancesLeft').innerHTML = "Chances left: " + Number(8-(score+1));
                }
                // document.querySelector('#chancesLeft').innerHTML = "Chances left: " + Number(8-(score+1));
                if(userChosenNumber > randomNumber) {
                    document.querySelector(".hint").innerHTML = "The number is less than " + userChosenNumber;
                }
                else {
                    document.querySelector(".hint").innerHTML = "The number is greater than " + userChosenNumber;
                }
                
            }
        }
})
}
game();
function updateContent(mediaQueryList) {
    const messageDiv = document.querySelector('#chancesLeft');
    if (mediaQueryList.matches) {
        yes = true;
      // Screen width is 1080px or less
      messageDiv.textContent = Number(8-(score+1));
    } else {
        yes = false;
      // Screen width is greater than 1080px
      messageDiv.textContent = 'Chances left: ' + Number(8-(score+1));
    }
  }

  // Create a MediaQueryList object
  const mediaQueryList = window.matchMedia('(max-width: 1080px)');

  // Add a listener for changes in the media query state
  mediaQueryList.addEventListener('change', () => updateContent(mediaQueryList));

  // Initial check
  updateContent(mediaQueryList);
