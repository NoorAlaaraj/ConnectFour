// const PlayerOne = 'Ross'
// const PlayerTwo = 'Rachel'

// let board = document.querySelector(".board") 
// let player = document.querySelector(".player") 
// let restart = document.querySelector(".restart") 
// let box=0

// let combination = [ 
    // [0, 1, 2, 3],
    // [41, 40, 39, 38],
    // [7, 8, 9, 10], 
    // [34, 33, 32, 31],
    // [14, 15, 16, 17],
    // [27, 26, 25, 24], 
    // [21, 22, 23, 24],
    // [20, 19, 18, 17],
    // [28, 29, 30, 31], 
    // [13, 12, 11, 10],
    // [35, 36, 37, 38],
    // [6, 5, 4, 3], 
    // [0, 7, 14, 21], 
    // [41, 34, 27, 20],
    // [1, 8, 15, 22], 
    // [40, 33, 26, 19],
    // [2, 9, 16, 23],
    // [39, 32, 25, 18], 
    // [3, 10, 17, 24],
    // [38, 31, 24, 17],
    // [4, 11, 18, 25], 
    // [37, 30, 23, 16],
    // [5, 12, 19, 26],
    // [36, 29, 22, 15], 
    // [6, 13, 20, 27],
    // [35, 28, 21, 14],
    // [0, 8, 16, 24], 
    // [41, 33, 25, 17],
    // [7, 15, 23, 31],
    // [34, 26, 18, 10], 
    // [14, 22, 30, 38],
    // [27, 19, 11, 3],
    // [35, 29, 23, 17], 
    // [6, 12, 18, 24],
    // [28, 22, 16, 10],
    // [13, 19, 25, 31], 
    // [21, 15, 9, 3],
    // [20, 26, 32, 38],
    // [36, 30, 24, 18], 
    // [5, 11, 17, 23],
    // [37, 31, 25, 19],
    // [4, 10, 16, 22], 
    // [2, 10, 18, 26],
    // [39, 31, 23, 15],
    // [1, 9, 17, 25], 
    // [40, 32, 24, 16],
    // [9, 7, 25, 33],
    // [8, 16, 24, 32], 
    // [11, 7, 23, 29],
    // [12, 18, 24, 30],
    // [1, 2, 3, 4], 
    // [5, 4, 3, 2],
    // [8, 9, 10, 11],
    // [12, 11, 10, 9],
    // [15, 16, 17, 18],
    // [19, 18, 17, 16],
    // [22, 23, 24, 25], 
    // [26, 25, 24, 23],
    // [29, 30, 31, 32],
    // [33, 32, 31, 30], 
    // [36, 37, 38, 39],
    // [40, 39, 38, 37],
    // [7, 14, 21, 28], 
    // [8, 15, 22, 29],
    // [9, 16, 23, 30],
    // [10, 17, 24, 31], 
    // [11, 18, 25, 32],
    // [12, 19, 26, 33],
    // [13, 20, 27, 34]
// ]; 

// let currentPlayer=1 

// document.addEventListener("DOMContentLoaded", loadDOM)

// function loadDOM(){ 
//     createBoard() 
//     player.innerHTML=currentPlayer 
//     let circles =document.querySelectorAll(".cell") 
//     Array.from(circles).forEach(circle=>{ 
//     circle.addEventListener("click",clickBox)
//     })
//     restart.addEventListener("click",reset) 
// }

// function loadDOM(){ 
//     createBoard() 
//     player.innerHTML=currentPlayer 
//     let circles =document.querySelectorAll(".cell") 
//     Array.from(circles).forEach(circle=>{ 
//     circle.addEventListener("click",clickBox)
//     })
//     restart.addEventListener("click",reset) 
// } 

// function createBoard(){ 
//     for(let i=0;i<49;i++)
//     { 
//     let div =document.createElement("div") 
//     div.setAttribute("data-id",i) 
//     div.className = "circle" 
//     if (i>=42){ 
//     div.className="taken" 
//     } 
//     board.appendChild(div) 
//     } 
// }  

// function clickBox(){ 
//     let circles =document.querySelectorAll("cell") 
//     let click =parseInt(this.dataset.id) 
//     if( circles[click+7].classList.contains("taken") && !circles[click].classList.contains("taken")){ 
//     if(currentPlayer===1){ 
//     currentPlayer=2 
//     player.innerHTML=currentPlayer
//     this.className="Ross taken" 
//     checkWon() 
//     }

//     else if(currentPlayer===2){ 
//     currentPlayer=1 
//     player.innerHTML=currentPlayer 
//     this.className="Rachel taken"
//     checkWon() 
//     } 

//     if(box===42){ 
//     setTimeout(()=>alert("boxes filled"),300)
//     setTimeout(()=>restart.style.display="flex",500) 
//     } 
//     } 
// }

// function checkWon(){
//     let circles =document.querySelectorAll("cell")
//     for (let y=0;y<combination.length;y++){
//     let circle =combination[y]

//     if(circle.every(q=>circles[q].classList.contains("Ross"))){
//       setTimeout(() =>alert("Ross WON!"), 200)
//       setTimeout(() =>restart.style.display="flex", 500)
//     }

//     else if(circle.every(q=>circles[q].classList.contains("Rachel"))){
//       setTimeout(() =>alert("Rachel WON!"), 200)
//       setTimeout(() =>restart.style.display="flex", 500)
//     }
//     }
//     }

// -------------------- TRY TO DO AS TIC TAC TOE

const PlayerOne = 'Ross'
const PlayerTwo = 'Rachel'
const WINNING_COMBINATIONS = [ 
    [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
    [34, 33, 32, 31],[14, 15, 16, 17],[27, 26, 25, 24], 
    [21, 22, 23, 24], [20, 19, 18, 17],[28, 29, 30, 31], 
    [13, 12, 11, 10], [35, 36, 37, 38],[6, 5, 4, 3],
    [0, 7, 14, 21],[41, 34, 27, 20],[1, 8, 15, 22],
    [40, 33, 26, 19],[2, 9, 16, 23],[39, 32, 25, 18], 
    [3, 10, 17, 24],[38, 31, 24, 17],[4, 11, 18, 25], 
    [37, 30, 23, 16],[5, 12, 19, 26],[36, 29, 22, 15], 
    [6, 13, 20, 27],[35, 28, 21, 14],[0, 8, 16, 24], 
    [41, 33, 25, 17],[7, 15, 23, 31],[34, 26, 18, 10], 
    [14, 22, 30, 38],[27, 19, 11, 3],[35, 29, 23, 17], 
    [6, 12, 18, 24],[28, 22, 16, 10],[13, 19, 25, 31], 
    [21, 15, 9, 3],[20, 26, 32, 38],[36, 30, 24, 18], 
    [5, 11, 17, 23],[37, 31, 25, 19],[4, 10, 16, 22], 
    [2, 10, 18, 26],[39, 31, 23, 15],[1, 9, 17, 25], 
    [40, 32, 24, 16],[9, 7, 25, 33],[8, 16, 24, 32], 
    [11, 7, 23, 29],[12, 18, 24, 30],[1, 2, 3, 4], 
    [5, 4, 3, 2],[8, 9, 10, 11],[12, 11, 10, 9],
    [15, 16, 17, 18],[19, 18, 17, 16],[22, 23, 24, 25], 
    [26, 25, 24, 23],[29, 30, 31, 32],[33, 32, 31, 30], 
    [36, 37, 38, 39],[40, 39, 38, 37],[7, 14, 21, 28], 
    [8, 15, 22, 29],[9, 16, 23, 30],[10, 17, 24, 31], 
    [11, 18, 25, 32],[12, 19, 26, 33],[13, 20, 27, 34]
]

const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById ('board')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-text]')

let rachelTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame () {
    rachelTurn = false
    cellElements.forEach(cell => {
    cell.classList.remove(PlayerOne)
    cell.classList.remove(PlayerTwo)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
    })
}

function handleClick(e) {
const cell = e.target
const currentClass = rachelTurn ? PlayerTwo : PlayerOne
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
  endGame(false)
} else (isDraw()) 
{
  endGame(true)
} 
}
// if it is rachel turn then we want return playerTwo class
//  otherwise we are gonna return the playerOne

function endGame(draw) {
    if (draw) {
      winningMessageTextElement.innerText = 'Draw!'
    } else {
      winningMessageTextElement.innerText = `${rachelTurn ? "Rachel's" : "Ross's"} Wins!`
    }
      //   remove event listener 
    cellElements.forEach.removeEventListener('click', endGame)  
}

function isDraw() {
    return [...cellElements].every(cell => {
      return cell.classList.contains(PlayerOne) || cell.classList.contains(PlayerTwo)
    })
}

function swapTurns() {
  circleTurn = !circleTurn
}
