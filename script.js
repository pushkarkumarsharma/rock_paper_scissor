let userscore = 0;
let compscore = 0;
const msg = document.querySelector("#msg")
const choices = document.querySelectorAll(".choice");
const userScores = document.querySelector("#user-score");
const compScores = document.querySelector("#comp-score");
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const rdmidx = Math.floor(Math.random() * 3);
  return options[rdmidx];
};  

const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin=== true){
        userscore++;
        userScores.innerText = userscore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScores.innerText = compscore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const drawchoice = () => {
  msg.innerText = "Game was Drawn";
  msg.style.backgroundColor = "#081b31"
};

const playgame = (userchoice) => {
  const compChoice = genCompChoice();
  if (userchoice === compChoice) {
    drawchoice();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compChoice === "scissor" ? false : true;
    } else {
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin,userchoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
