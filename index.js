var randomNumber1 =  Math.floor(Math.random() * 6) + 1 ;

var randonDice = "dice" + randomNumber1 + ".png";

var randonImagessources = " images/" + randonDice;

document.querySelectorAll("img")[0].setAttribute("src",randonImagessources);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randonImagessources2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , randonImagessources2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML=" <p>🏆</p>player 1 won";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="<p>🏆</p> player 2 won";
}
else if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML=" 📍draw ";
}