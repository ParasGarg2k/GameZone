let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newbtn");
let msgcon = document.querySelector(".msgcont");
let msg = document.querySelector("#msg");

let turnO = true;
let cnt = 0;
const winPattrn = [
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
  turnO = true;
  cnt = 0;
  enableBoxes();
  msgcon.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    cnt++;
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } 
    else {
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;

    checkwinner();
  });
});

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations,Winner is ${winner}`;
  msgcon.classList.remove("hide");
  disableBoxes();
};

const checkwinner = () => {
  if (cnt == 9) {
    msg.innerText = "Game Drawn";
    msgcon.classList.remove("hide");
    disableBoxes();
  }
  
  for (let pattern of winPattrn) {
    let posval1 = boxes[pattern[0]].innerText;
    let posval2 = boxes[pattern[1]].innerText;
    let posval3 = boxes[pattern[2]].innerText;

    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 === posval2 && posval2 === posval3) {
        // console.log("winner", posval1);
        showWinner(posval1);
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
