let gameSeq = [];
let userSeq = [];
let hightScore = 0;

let btns = ["box1", "box2", "box3", "box4"];

let gameStarted = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (gameStarted == false) {
        gameStarted = true;
        console.log("Game Started");
    }
    levelUp();
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 100);
}

let allBtn = document.querySelectorAll(".box");

for (let btn of allBtn) {
    btn.addEventListener("click", btnPress);
}

function checkSeq(index) {
    if (gameSeq[index] == userSeq[index]) {

        if (gameSeq.length == userSeq.length) {

            setTimeout(levelUp, 500);
        }
    }
    else {
        document.querySelector("body").style.background = "red";
        setTimeout(() => {
            document.querySelector("body").style.background = "white";
        }, 150);
        if (hightScore < level) {
            hightScore = level;
        }
        h3.innerText = `Game Over ! Your Score : ${level} | Highest Score : ${hightScore}
        now press any key to start game again`;
        gameStarted = false;
        level = 0;
        gameSeq = [];
        userSeq = [];
    }
}

function btnPress() {

    userSeq.push(this.getAttribute("id"));
    console.log(userSeq);
    userFlash(this);
    checkSeq(userSeq.length - 1);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let random = Math.floor(Math.random() * 4);
    let randomBox = btns[random];
    let randomBtn = document.querySelector(`.${randomBox}`);
    gameSeq.push(randomBox);
    console.log(gameSeq);
    gameFlash(randomBtn);
}