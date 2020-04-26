var player1,player2,rounds,actualPlayer1,actualPlayer2,counter,prompter,DrawScore;
var OneScore,TwoScore;
OneScore = 0;
TwoScore = 0;
DrawScore = 0;
counter = 0;
  rounds = parseInt(prompt("Enter number of rounds: "));
  player1Name = prompt("Enter Player 1 name: ");
  player2Name = prompt("Enter Player 2 name: ");
  document.querySelector("p.pno1").innerHTML = player1Name;
  document.querySelector("p.pno2").innerHTML = player2Name;
//Functions
function player1_wins()
{
  document.querySelector("h1").innerHTML = "Player 1 wins";
  OneScore+=1;
}
function player2_wins()
{
  document.querySelector("h1").innerHTML = "Player 2 wins";
  TwoScore+=1;
}
function play()
{

    player1 = Math.floor(Math.random()*3)+1;
    player2 = Math.floor(Math.random()*3)+1;
    if(player1 == 1)
    {
      actualPlayer1 = "Stone";
    }
    else if(player1 == 2)
    {
      actualPlayer1 = "Scissor";
    }
    else {
      actualPlayer1 = "Paper"
    }

    if(player2 == 1)
    {
      actualPlayer2 = "Stone";
    }
    else if(player2 == 2)
    {
      actualPlayer2 = "Scissor";
    }
    else {
      actualPlayer2 = "Paper"
    }
    switch(player1)
    {
      case 1:
        document.querySelector("img.img1").setAttribute("src","images/stone.png");
        break;
      case 2:
        document.querySelector("img.img1").setAttribute("src","images/scissor.png");
        break;
      case 3:
        document.querySelector("img.img1").setAttribute("src","images/paper.png");
        break;
    }
    switch(player2)
    {
      case 1:
        document.querySelector("img.img2").setAttribute("src","images/stone.png");
        break;
      case 2:
        document.querySelector("img.img2").setAttribute("src","images/scissor.png");
        break;
      case 3:
        document.querySelector("img.img2").setAttribute("src","images/paper.png");
        break;
    }
    if(player1 == player2)
    {
      document.querySelector("h1").innerHTML = "Draw";
      DrawScore+=1;
    }
    else if(actualPlayer1==="Stone" && actualPlayer2==="Scissor")
    {
      player1_wins();
    }
    else if(actualPlayer1 ==="Scissor" && actualPlayer2==="Paper")
    {
      player1_wins();
    }
    else if(actualPlayer1 ==="Paper" && actualPlayer2==="Stone")
    {
      player1_wins();
    }
    else if(actualPlayer2==="Stone" && actualPlayer1==="Scissor")
    {
      player2_wins();
    }
    else if(actualPlayer2 ==="Scissor" && actualPlayer1==="Paper")
    {
      player2_wins();
    }
    else if(actualPlayer2 ==="Paper" && actualPlayer1==="Stone")
    {
      player2_wins();
    }
    console.log(counter);
    ++counter;
    if(counter == rounds)
    {
      document.querySelector("button.round-btn").classList.add("Invisible");
      document.querySelector("div.score").classList.remove("Invisible");
      document.querySelector("span.pno1").innerHTML = player1Name;
      document.querySelector("span.pno2").innerHTML = player2Name;
      document.getElementById('drawscore').innerHTML = DrawScore;
      document.getElementById("play1").innerHTML = OneScore;
      document.getElementById("play2").innerHTML = TwoScore;
      if(OneScore == TwoScore)
      {
        document.querySelector("h1").innerHTML = "Final Result : Draw";
      }
      else if(OneScore>TwoScore)
      {
        document.querySelector("h1").innerHTML = "Final Result : "+player1Name+" wins!";
      }
      else
      {
        document.querySelector("h1").innerHTML = "Final Result : "+player2Name+" wins!";
      }
    }
}


  document.querySelector("button").addEventListener("click",play);
