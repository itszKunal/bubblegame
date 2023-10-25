var timer=60;
var score=0;
var hitrn =0;

// document.querySelector("h1").style.fontSize="1000px";
// document.querySelector("#bot").addEventListener("click",function () {
//     runtimer();
// });

makehit();
function makebubble() {
    var clutter = "";
    for (let i = 1; i <= 171; i++) {
        v = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${v}</div>`;
    }
    document.querySelector(".pbot").innerHTML = clutter;
}
makebubble();

function runtimer() {
    var timerint=setInterval(function () {
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#bot").innerHTML=`<h1>Game Over</h1>`;
        }
    },1000);
}
runtimer();


function makehit() {
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitrn;
}


document.querySelector("#bot").addEventListener("click", function (dets) {
    // runtimer();
    var clicknum=Number(dets.target.textContent);
    if (clicknum === hitrn) {
        incScore();
        makebubble();
        makehit();
    }
});

function incScore() {
    score+=10;
    document.querySelector("#score").textContent=score;
}