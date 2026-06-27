// To track user and computer score we will take 2 variables

let userScore=0;
let compScore=0;

// To access which image is clicked by user i.e.which option is chosen by user
const choices= document.querySelectorAll(".choice");

//Now we have to display the message on PLAY YOUR MOVE THEN WE HAVE TO ACCESS THAT P TAG

const msg = document.querySelector(".msg");

//To access the paragarph tag of userscore
const userScorePara = document.querySelector("#user-score");

//To access the paragarph tag ocomputerscore
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //Rock,paper,scissor
    let options = ["rock","paper","scissors"];
    //Js does not have many ways to find out the random string from an array for which we have one frequently techniqes i.e. math.random() WHICH GENERATES ANY RANDOM VALUE FROM 0 TO 1 AND THIS NUMBER WE CAN USE TO APPLY AS INDEX NUMBER OFTHE STRING ARRAY we can't generate random strings but we can generate random numbers THAT'S WHY WE HAVE STORED THE OPTIONS IN HE ARRAY SO HAT WE CAN ACCESS THE POSITION BY RANDOM NUMBER
    //TO BRING THE RANDOM NUMBER WITHIN THE RANGE 0 TO 2I.E.THE SIZE-1 , SIZE=3 MULTIPLY THE RANDOM NUMBER BY SIZE AND USE MATH.FLOOR THAT WILL BE OUR INDEX
    const randIdx= Math.floor(Math.random()*3); //Computer Choice
    return options[randIdx]; //Not randIdx that will return you index not the string
}

//Draw Game
const drawGame = () => {
    console.log("Game was draw");
    msg.innerText="Game was draw.";
    msg.style.backgroundColor = "rgb(2, 2, 49)";
}

//User won or not
 const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin)
    {
        userScore++;
        userScorePara.innerText= userScore;
        console.log("You Win :)");
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorePara.innerText= compScore;
        console.log("You Lose :(");
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
 }

//Computer Part
const playGame = (userChoice) => {
    console.log("User choice = ",userChoice);
    //Generate Computer Choice ( for this we will make other function)
    const compChoice= genCompChoice();
    console.log("Computer Choice = ",compChoice);

    if(userChoice===compChoice){
        //Draw Game
        drawGame();
    }

    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            // Computer choice can be scissors or paper not rock becuase it will be DRAW and will not come in this case
            userWin = compChoice === "paper" ? false : true;
        }

        else if (userChoice==="paper")
        {
            //Computer has only scissors or rock
            userWin = compChoice==="scissors" ? false : true;
        }

        else{
            //Computer has only rock or paper
            userWin = compChoice==="rock"? false : true; 
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

console.log(choices);
// hum ek for each add karenge joh hum choices class ke andar 3 choice lake dekha and unn choice ko track karne ke liye ki rock, paper or scissorwhich was clicked uspe add EventListener lagaynege
choices.forEach((choice)=> {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


