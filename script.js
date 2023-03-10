const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array; 
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!

// controlling variables
let previousCardColor = 'undefined';
let previousEventTarget = 'undefined';
let card1 = 'undefined';
let card2 = 'undefined'

function handleCardClick(event) {
  // you can use event.target to see which element was clicked

  console.log(previousCardColor, previousEventTarget, event.target); 
  // after running the first condition (below) this line runs 
  if (previousCardColor !== 'undefined') {  

            // if I don't click on the same element and the previous card is different than the current one (match)
            if (previousCardColor == event.target.className && previousEventTarget !== event.currentTarget
              && card1 == 'color1' && card2 == 'undefined') 
              
              {
              event.target.style.backgroundColor = event.target.className;
              previousEventTarget.style.backgroundColor = event.target.className;
              card1 = 'undefined';
              card2 = 'undefined';
              
            }
            
            // if I click on the same element and the previous card is equal to the current one (match)
            else if (previousCardColor == event.target.className && previousEventTarget == event.currentTarget
              && card1 == 'color1' && card2 == 'undentified')
            
            {
              event.target.style.backgroundColor = 'black';
              card1 = 'color1'
            }
            
            
            // the second card which has been selected has not the same color (so both cards turn to white)
              else if (previousCardColor !== event.target.className && card1 == 'color1' && card2 == 'undefined') {
              
                event.target.style.backgroundColor = event.target.className;
              
                setTimeout (() => {
                event.target.style.backgroundColor = 'white'
                },500)
                
                previousEventTarget.style.backgroundColor = 'white'
                
                card1 = 'undefined';
                card2 = 'undefined';
              }
              
              // after a match, it selects the first element to be compared with the next card (next click)
              else if (previousCardColor !== event.target.className && card1 == 'undefined' && card2 == 'undefined') {
                
                event.target.style.backgroundColor = event.target.className;
                card1 = 'color1';             
                }

    }
    
    // First condition that runs and initilizing the variables
    else if (previousEventTarget == 'undefined' && card1 === 'undefined' && card2 === 'undefined') {
            event.target.style.backgroundColor = event.target.className;
            card1 = 'color1'
    }
            previousCardColor = event.target.className
            previousEventTarget = event.target
            

            console.log("you just clicked", event.target,"card1", card1, "card2", card2);
                      
}

            const restartBtn = document.querySelector('.btn');
            restartBtn.addEventListener("click", function(e) {
              location.reload(); 

            });


// when the DOM loads
createDivsForColors(shuffledColors);


