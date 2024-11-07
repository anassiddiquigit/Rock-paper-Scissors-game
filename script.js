let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");

const compscorepara = document.querySelector("#comp-score");
let userwin=true;

const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("YOU WIN!");
        msg.innerText = `You Win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "#283618"
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("YOU LOSE");
        msg.innerText =`You loose! ${compchoice} beats ${userchoice}`
        msg.style.backgroundColor = "#bf0603"
    }
}

const drawgame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was Draw, Play Agian";
    msg.style.backgroundColor = "#003049"
}

const getcompchoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const playgame = (userchoice) =>{
      console.log("userchoice = ",userchoice)
      const compchoice = getcompchoice();
      console.log("comp choice is: ",compchoice);
      if(userchoice === compchoice){
        drawgame();
      }else{
         userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        } 
        
        else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        } 
        
        else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
      }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",  () => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});