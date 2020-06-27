
// document.querySelector(".onePlayer").addEventListener("click",function(){
//   let player1 = prompt("Enter player one's name:")
//   document.querySelector(".p1").textContent = player1;

// });


document.querySelector(".dice1img1").addEventListener("click",clickDice1_1);
document.querySelector(".img2").addEventListener("click",clickDice1_2);

function clickDice1_1() {
  let random1 = Math.floor(Math.random()*6)+1;
  let random2 = Math.floor(Math.random()*6)+1;
  document.querySelector(".dice1img1").setAttribute("src",`images/dice${random1}.png`);
  document.querySelector(".dice1img2").setAttribute("src",`images/dice${random2}.png`);
  if(random1 > random2) {
    document.querySelector("h1").innerHTML = "<img class='leftFlag' src='images/flag.png'>You Win!!"
  } else if(random1 < random2) {
    document.querySelector("h1").innerHTML = "You Lose!!<img class='rightFlag' src='images/flag.png'>"
  } else if(random1 == random2) {
    document.querySelector("h1").innerHTML = "<img class='leftFlag' src='images/flag.png'>Draw!<img class='rightFlag' src='images/flag.png'>"
  }
}

function clickDice1_2() {
  let random2 = Math.floor(Math.random()*6)+1;
  document.querySelector(".img2").setAttribute("src",`images/dice${random2}.png`);
}