function roll() {
    let randomNumber1 = Math.floor(Math.random()*6) + 1;
    let randomNumber2 = Math.floor(Math.random()*6) + 1;
    let imgSource1 = "images/dice-" + randomNumber1 + "-hi.png";
    let imgSource2 = "images/dice-" + randomNumber2 + "-hi.png";

    document.querySelector(".img1").setAttribute("src", imgSource1);
    document.querySelector(".img2").setAttribute("src", imgSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText = "Player 1 Wins!";
    } else if (randomNumber1 == randomNumber2) {
        document.querySelector("h1").innerText = "Draw!";
    } else {
        document.querySelector("h1").innerText = "Player 2 Wins!";
    }
}