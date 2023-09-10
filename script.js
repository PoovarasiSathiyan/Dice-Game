let images = ["dice-1.jpg","dice-1.jpg",
"dice-2.jpg",
"dice-3.jpg",
"dice-4.jpg",
"dice-5.jpg",
"dice-6.jpg"];

let player1turn = true;
let player1score=0;
let player2score=0;
let sum=0;
let sum1=0;
var currentvalue1;
var currentvalue2;

let dice=document.querySelectorAll("img");

const rollbtn1= document.getElementById("roll-btn1");
const rollbtn2= document.getElementById("roll-btn2");
const resetbtn= document.getElementById("reset-btn");

rollbtn1.addEventListener('click', StartGame)
rollbtn2.addEventListener('click', startgame1)
resetbtn.addEventListener('click',reset)


function StartGame(){
  let p1score = Math.floor(Math.random()*6)+1;
  document.querySelector("#die-1").setAttribute("src", images[p1score]);
  console.log(p1score);
  if(sum>=30){
    document.querySelector("#result").innerHTML="Player1 Won the Game"
    document.querySelector("#roll-btn1").disabled=true;
    document.querySelector("#roll-btn2").disabled=true;
  }
  else{
  sum=sum + p1score;
  document.querySelector("#p1total").innerHTML=sum;
  }
}
  
  function startgame1(){
    let p2score=Math.floor(Math.random()*6)+1;
    console.log(p2score);
    document.querySelector("#die-1").setAttribute("src", images[p2score]);
    if(sum1>=30){
      document.querySelector("#result").innerHTML="Player2 Won the Game"
    document.querySelector("#roll-btn1").disabled=true;
    document.querySelector("#roll-btn2").disabled=true;
    }
    else{
  sum1 = sum1 + p2score;
    document.querySelector("#p2total").innerHTML=sum1;
    }
  }

function reset(){
  p1score=0;
  p2score=0;
  sum=0;
  sum1=0;
  document.querySelector("#p1total").innerHTML=p1score;
  document.querySelector("#p2total").innerHTML=p2score;
  document.querySelector("#roll-btn1").disabled=false;
    document.querySelector("#roll-btn2").disabled=false;
    document.querySelector("#result").innerHTML=""
}

