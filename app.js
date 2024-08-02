let usrScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#end");
const col=document.querySelector("#result");
const yourScore=document.querySelector("#Your-score");
const comptScore=document.querySelector("#Comp-score");

const getcompChoice=()=>{
    const options=["rock","paper","scissor"];
    const optionIdx=Math.floor(Math.random()*3)
    return options[optionIdx];
}

const drawGame=()=>{
    console.log("draw");
    msg.innerText="Game was draw! Play again";
    col.style.backgroundColor="blue"
    
}
const showWinner=(userWin)=>{
    if(userWin){
        console.log("You win")
        msg.innerText="You win";
        col.style.backgroundColor="green"
        usrScore++;
        yourScore.innerText=usrScore;
}
else{
    console.log("You lose")
    msg.innerText="You Lose!";
    col.style.backgroundColor="red"
    compScore++;
    comptScore.innerText=compScore;
}
}
const playGame=(userChoice)=>{
console.log("user choice:",userChoice)
const compChoice =getcompChoice();
console.log("comp choice:",compChoice);
if(userChoice===compChoice){
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"&&compChoice==="scissor"){
        userWin=true;
}
else if (userChoice==="rock"&&compChoice==="paper"){
    userWin=false;
}
else if(userChoice==="paper"&&compChoice==="scissor"){
    userWin=false;
}
else if(userChoice==="paper"&&compChoice==="rock"){
    userWin=true;
}
else if(userChoice==="scissor"&&compChoice==="rock"){
    userWin=false;
}
else if(userChoice==="scissor"&&compChoice==="paper"){
    userWin=true;
}
showWinner(userWin);
}
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
})
