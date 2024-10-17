let boxes = document.querySelectorAll(".btn");
let resetButton = document.querySelector(".resetBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let newGame = document.querySelector(".newGame");

let turn0 = "true";

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = "true";
    msgContainer.classList.add('hide');
    enableBtn();
};

const disableBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        count = 0;
    }
};

const draw = () => {
    msg.innerText = "It's a draw!";
    msgContainer.classList.remove('hide');
    disableBtn();
};

var count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
           box.innerText = "O";
           box.style.color = "red";
           turn0 = false;
        } else {
            box.innerText = "X";
            box.style.color = "blue";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
        count++;
        if (count === 9) {
            draw(count);
        }        
        console.log(count);
    });

});


const showWinner = (winner) => {
    msg.innerText = `Congratulations! Player ${winner} wins!`;
    msgContainer.classList.remove('hide');
    disableBtn(winner);
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner");
                showWinner(pos1Val);
        }
    }
}};

// const draw = () => {

//     msg.innerText = "It's a draw!";
//     msgContainer.classList.remove('hide');
//     disableBtn();
// };

resetButton.addEventListener("click", resetGame);

newGame.addEventListener("click", resetGame);
