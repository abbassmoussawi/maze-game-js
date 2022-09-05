// var person = prompt("Please enter your name");

// if (person != null) {
//     document.getElementById("status").innerHTML =
//         "Hello " + person;
// }
window.addEventListener("load", function() {

    var startGame = document.getElementById("start");
    var resetGame = document.getElementById("start");
    var boundaries = document.getElementsByClassName("boundary");

    startGame.addEventListener("mouseover", starting);
    resetGame.addEventListener("click", reset);
    end.addEventListener("mouseover", win);

    //  Starting Game
    function starting() {
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].addEventListener("mouseover", lose);
        }
        // Lose function: if the player touch the boundary will lose
        function lose() {
            for (var i = 0; i < boundaries.length; i++) {
                boundaries[i].style.backgroundColor = "red";
                document.getElementById('status').innerHTML = "You lost";
                stopExecution();
            }
        }

    }
    // win function:if the player arrive the end will win
    function win() {
        var end = document.getElementById("end");
        document.getElementById('status').innerHTML = "You win";
        stopExecution();
    }

    // function to reset the game:if the player press the S button ,he will srest the game and start agian
    function reset() {
        location.reload();
    }

    function stopExecution() {
        return false;

    }

})