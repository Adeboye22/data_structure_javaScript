var button = document.querySelector("button");
var isBlack = false;
var body = document.querySelector("body");
var h1 = document.querySelector("h1")

button.addEventListener("click", myBtn);

// myBtn function
function myBtn(){
    // if black
    if(isBlack) {
        body.style.background = "white";
        h1.style.color = "black";
        document.querySelector("button").onclick = function() {
            document.querySelector("button").innerHTML = "Dark theme";
        }
    } else {
        //if white
        body.style.background = "black";
        h1.style.color = "white"
        document.querySelector("button").onclick = function() {
            document.querySelector("button").innerHTML = "White theme";
        }        
    }

    isBlack = !isBlack;
}