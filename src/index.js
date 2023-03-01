let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);


document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 +".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 +".png");

if(randomNumber1 < randomNumber2) {
    document.querySelector(".title").innerHTML = "Player 2 win !";
} else if (randomNumber1 == randomNumber2) {
    document.querySelector(".title").innerHTML = "Draw";
} else {
    document.querySelector(".title").innerHTML = "Player 1 win !";
}

