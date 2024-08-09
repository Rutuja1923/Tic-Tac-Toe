let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true ; //playerO , playerX
let totalCount = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    enableButtons();
    msgContainer.classList.add("hide");
    totalCount=0;
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Box was clicked");
        totalCount++;
        if (turnO){
            box.classList.add("box2");
            box.innerText="O";
            turnO =false;
        }
        else{
            box.classList.remove("box2");
            box.innerText = "X";
            turnO = true;
        }
        box.disabled=true;       
        checkWinner();
    });
});

const disableButtons = () =>{
    for(let box of boxes){
        box.disabled = true ;
    }
};

const enableButtons = () =>{
    for(let box of boxes){
        box.disabled = false ;
        box.innerText="";
    }
};

const showWinner = (winner)=>{
    msg.innerText = `Congragulations ! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableButtons();
};

const draw = ()=>{
    msg.innerText = `Uh-oh! It's a Draw!`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText; 
        let pos2val = boxes[pattern[1]].innerText; 
        let pos3val = boxes[pattern[2]].innerText; 
        if(totalCount!=9){
            if(pos1val !="" && pos2val !="" && pos3val !=""){
                if(pos1val === pos2val && pos2val === pos3val){
                    console.log("winner",pos1val);
                    showWinner(pos1val);
                }    
            }
        }
        else{
            draw();
        }
    };
} ;

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

// if(box.disabled==true){
//     box.classList.add("shake");
//     setTimeout(() => {
//         box.classList.remove("shake");
//     },100);
// }