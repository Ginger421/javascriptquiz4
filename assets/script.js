//question-container div
var questionsEl = document.getElementById("question-container");

//div with time
var timeEl = document.getElementById("time");

//button to start game
var startBtn = document.getElementById("start-btn");

//p to display questio 
var par = document.createElement("p");
par.style.fontSize = "5vh";

//ul to display list of answers
var ulEl = document.createElement("ul");
ulEl.style.listStyle = "none";
ulEl.style.justifyContent = "center";
ulEl.style.alignItems = "center";


var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
li1.style.fontSize = "4vh";
li2.style.fontSize = "4vh";
li3.style.fontSize = "4vh";

//setting the score at 0
var score = 0;

var seconds = 90;

// var for container that will show score
var keepScore = document.getElementById("score-container");

const quiz1 = {
    question: "What kind of data type is '100'?",
    answer1: "1: number", 
    answer2: "2: string", 
    answer3: "3: boolean"
}

const quiz2 = {
    question: "Call a function named playGame. You do not need to pass parameters through it.",
    answer1: "1: call playGame()", 
    answer2: "2: playGame(); ", 
    answer3: "3: playGame"  
}

const quiz3 = {
  question: "What is the correct way to declare an undefined variable named timer?",
    answer1: "1: var = timer", 
    answer2: "2: var timer;", 
    answer3: "3: timer  var"
}

// add click listener to button
startBtn.addEventListener("click", function(){
    countdown();
    playGame();
//put function for game here too
}
); 

//function that is called when the buttonEl is clicked
function countdown() {
    // Sets interval in variable
    var timer = setInterval(function() {
        i= 90, i>= 0, seconds--;
      timeEl.textContent = seconds + " time remaining.";
  
      if(seconds === 0) {
        //clears the interval
        clearInterval(timer);
      }
  
    }, 1000);
  }


  function playGame() {

    //add p for question to div on html
      questionsEl.appendChild(par);
    
      //append the li to the ul
      ulEl.appendChild(li1); 
      ulEl.appendChild(li2);
      ulEl.appendChild(li3);  
      
      //add text from the object called quiz to the dynamically created elements
      par.textContent = quiz1.question;
      li1.textContent = quiz1.answer1;
      li2.textContent = quiz1.answer2;
      li3.textContent = quiz1.answer3;
      
      //add the ul with lis to div
      questionsEl.appendChild(ulEl);  
    
      
    }
    //ended playGame()


ulEl.addEventListener("click", function listener(e){
        if (e.target === li2) {
        score++;
        keepScore.textContent = `Current score: ${score}`
        console.log("hekko");
        seconds+=10;
        } else {
        score--;
        keepScore.textContent = `Current score: ${score}`
        seconds-=10;
        }
        clearGame();
      } 
      );

    function clearGame(params) {

     // ulEl.removeEventListener("click", function listener(e){});
        par.textContent = " ";
        li1.textContent = " ";
        li2.textContent = " ";
        li3.textContent = " ";

        playGame2();
    }   
    
    function playGame2() {

        par.textContent = quiz2.question;
        li1.textContent = quiz2.answer1;
        li2.textContent = quiz2.answer2;
        li3.textContent = quiz2.answer3;
    }

    ulEl.addEventListener("click", function listener(e){
      if (e.target === li2) {
      score++;
      keepScore.textContent = `Current score: ${score}`
      console.log("hekko");
      seconds+=10;
      } else {
      score--;
      keepScore.textContent = `Current score: ${score}`
      seconds-=10;
      }
       clearGame2();
    } 
    );
  

    
    function clearGame2(params) {
      
      par.textContent = " ";
      li1.textContent = " ";
      li2.textContent = " ";
      li3.textContent = " ";
     

      playGame3();
  }  


  function playGame3(params) {
    par.textContent = quiz3.question;
    li1.textContent = quiz3.answer1;
    li2.textContent = quiz3.answer2;
    li3.textContent = quiz3.answer3;    
  }

  // ulEl.addEventListener("click", function listener3(e){
  //   if (e.target === li1) {
  //   score++;
  //   keepScore.textContent = `Current score: ${score}`
  //   console.log("hekko");
  //   seconds+=10;
  //   } else {
  //   score--;
  //   keepScore.textContent = `Current score: ${score}`
  //   seconds-=10;
  //   }
  //   endGame();
  // } 
  // );

  // function endGame(params) {
  //   ulEl.removeEventListener("click", function listener3(e){});
  // }

  
