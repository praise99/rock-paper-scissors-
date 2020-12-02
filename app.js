const game=()=>{
    let pScore=0;
    let cScore=0;

    const startGame=()=>{
        const playBtn=document.querySelector(".play-btn");
        const introscreen=document.querySelector(".bottom")
        const match=document.querySelector(".game-option");

        playBtn.addEventListener("click",()=>{
            introscreen.classList.add("fade-out")
            match.classList.remove("fade-out")
        })

    }
    const playGame=()=>{
        const options=document.querySelectorAll(".selection-option img");
        const playerHand=document.querySelector(".player-hand");
        const computerHand=document.querySelector(".computer-hand");
        const match=document.querySelector(".game-option");
        const play=document.querySelector(".match");
        const again=document.querySelector(".position-btn");
        const border=document.querySelector(".shoot");
        const outline=document.querySelector(".reload");
        const handy=document.querySelectorAll(".option");
        
        handy.forEach(eachHand=>{
            eachHand.addEventListener("animationend",function(){
                this.style.animation="";
            })
        })
        //computer choice
        const computerOption=["rock", "paper","scissors","spock","lizard"]
        options.forEach(option=>{
            option.addEventListener("click",function(){
                const computerNumber=Math.floor(Math.random()*5);
                const computerChoice=computerOption[computerNumber]
                const round=document.querySelector(".position-btn");
                round.textContent="NEXT ROUND??"

                //display result
                let hand=this.alt
                playerHand.src=`images/icon-${hand}.svg`
                computerHand.src=`images/icon-${computerChoice}.svg`


                if(hand==="rock"){
                    border.classList.remove("spock");
                    border.classList.remove("paper");
                    border.classList.remove("lizard");
                    border.classList.remove("scissors");
                    border.classList.add("rock")
                }
                if(hand==="spock"){
                    border.classList.remove("rock");
                    border.classList.remove("paper");
                    border.classList.remove("lizard");
                    border.classList.remove("scissors");
                    border.classList.add("spock")
                }
                if(hand==="lizard"){
                    border.classList.remove("spock");
                    border.classList.remove("paper");
                    border.classList.remove("rock");
                    border.classList.remove("scissors");
                    border.classList.add("lizard")
                }
                if(hand==="paper"){
                    border.classList.remove("spock");
                    border.classList.remove("rock");
                    border.classList.remove("lizard");
                    border.classList.remove("scissors");
                    border.classList.add("paper")
                }
                if(hand==="scissors"){
                    border.classList.remove("spock");
                    border.classList.remove("paper");
                    border.classList.remove("lizard");
                    border.classList.remove("rock");
                    border.classList.add("scissors")
                }
                

                // border.classList.remove("rock")
                // border.classList.add("spock")
                if(computerChoice==="rock"){
                    outline.classList.remove("spock");
                    outline.classList.remove("paper");
                    outline.classList.remove("lizard");
                    outline.classList.remove("scissors");
                    outline.classList.add("rock")
                }
                if(computerChoice==="spock"){
                    outline.classList.remove("rock");
                    outline.classList.remove("paper");
                    outline.classList.remove("lizard");
                    outline.classList.remove("scissors");
                    outline.classList.add("spock")
                }
                if(computerChoice==="lizard"){
                    outline.classList.remove("rock");
                    outline.classList.remove("paper");
                    outline.classList.remove("spock");
                    outline.classList.remove("scissors");
                    outline.classList.add("lizard")
                }
                if(computerChoice==="paper"){
                    outline.classList.remove("rock");
                    outline.classList.remove("spock");
                    outline.classList.remove("lizard");
                    outline.classList.remove("scissors");
                    outline.classList.add("paper")
                }
                if(computerChoice==="scissors"){
                    outline.classList.remove("rock");
                    outline.classList.remove("paper");
                    outline.classList.remove("lizard");
                    outline.classList.remove("spock");
                    outline.classList.add("scissors")
                }

               
                compareHands(hand,computerChoice);
                match.classList.add("fade-out");
                play.classList.add("fade-in")


                

                again.addEventListener("click",()=>{
                    match.classList.remove("fade-out");
                play.classList.remove("fade-in")

                })

                border.style.animation="shake 2s ease"
                outline.style.animation="shake 2s ease"

            })
        })

    }
    const checkWinner=()=>{
        const winner2=document.querySelector(".position-title");
        const round=document.querySelector(".position-btn");
        if(pScore>=10){
            winner2.textContent="WINNER😀🥇!!!"
            round.textContent="NEW GAME??"
            pScore=0
            cScore=0
            let playerScore=document.querySelector(".player");
            let computerScore=document.querySelector(".computer");
            playerScore.textContent=pScore;
            computerScore.textContent=cScore;
        }
        if(cScore>=10){
            winner2.textContent="YOU LOST😞😥!!!"
            round.textContent="NEW GAME??"
            pScore=0
            cScore=0
            let playerScore=document.querySelector(".player");
            let computerScore=document.querySelector(".computer");
            playerScore.textContent=pScore;
            computerScore.textContent=cScore;
        }
    }
    const updatescore=()=>{
        let playerScore=document.querySelector(".player");
        let computerScore=document.querySelector(".computer");
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
    }
    const compareHands=(playerChoice,computerChoice)=>{
        const winner=document.querySelector(".position-title");
        if(playerChoice===computerChoice){
            winner.textContent="It's a tie";
            checkWinner();
            return
        }
        if(playerChoice==="rock"){
            if(computerChoice==="lizard" || computerChoice==="scissors"){
                winner.textContent="You win!!!"
                pScore++;
                updatescore();
                checkWinner();
                return
            }else{
                winner.textContent="The house wins!!!"
                cScore++;
                updatescore();
                checkWinner();
                return
            }
        }
        if(playerChoice==="paper"){
            if(computerChoice==="rock" || computerChoice==="spock"){
                winner.textContent="You win!!!"
                pScore++;
                updatescore();
                checkWinner();
                return
            }else{
                winner.textContent="The house wins!!!"
                cScore++;
                updatescore();
                checkWinner();
                return
            }
        }
        if(playerChoice==="scissors"){
            if(computerChoice==="paper" || computerChoice==="lizard"){
                winner.textContent="You win!!!"
                pScore++;
                updatescore();
                checkWinner();
                return
            }else{
                winner.textContent="The house wins!!!"
                cScore++;
                updatescore();
                checkWinner();
                return
            }
        }
        if(playerChoice==="spock"){
            if(computerChoice==="rock" || computerChoice==="scissors"){
                winner.textContent="You win!!!"
                pScore++;
                updatescore();
                checkWinner();
                return
            }else{
                winner.textContent="The house wins!!!"
                cScore++;
                updatescore();
                checkWinner();
                return
            }
        }
        if(playerChoice==="lizard"){
            if(computerChoice==="paper" || computerChoice==="spock"){
                winner.textContent="You win!!!"
                pScore++;
                updatescore();
                checkWinner();
                return
            }else{
                winner.textContent="The house wins!!!"
                cScore++;
                updatescore();
                checkWinner();
                return
            }
        }
    }
    //call inner function
    startGame()
    playGame()
}
//call outer function
game();