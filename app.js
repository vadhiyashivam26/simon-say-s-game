let gameseq = [];
let userseq = [];

let btns = ["yellow", "green", "red", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("click", function (){
    if(started == false){
        console.log("game is started..");
        started = true;
        
        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(() =>{
        btn.classList.remove("flash");
    },200);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    console.log("random btn", randColor);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        } else {
            console.log("click one more");
        }
    } else {
        h2.innerHTML = `<b>GAME OVER ! Your score was ${level-1}</b>`;
        h2.style.color = "red"; 
        // score();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    
    // console.log("user btn ", userColor);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

let reset = document.querySelector(".reset");

reset.addEventListener("click", () =>{
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;

});

