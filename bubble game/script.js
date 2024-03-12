var timer = 60;
var score=0;
var hitrn=0;


function getNewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
// function makeBubble(){
//     var clutter ="";

//     for(var i=1; i<=133; i++){
//         var rn = Math.floor(Math.random()*10)
//         clutter += `<div class="bubble">${rn}</div>`;
//     }
//     document.querySelector("#panelB").innerHTML=clutter;

// }

function makeBubble(){
    var clutter ="";
    var color="";

    for(var i=1; i<=133; i++){
        var rn = Math.floor(Math.random()*10)
        if(rn===0){
            color="yellow";
        }
        else if(rn===1){
            color="green";
        }
        else if(rn===2){
            color="blue";
        }
        else if(rn===3){
            color="orange";
        }
        else if(rn===4){
            color="purple";
        }
        else if(rn===5){
            color="pink";
        }
        else if(rn===6){
            color="red";
        }
        else if(rn===7){
            color="brown";
        }
        else if(rn===8){
            color="grey";
        }
        else if(rn===9){
            color="sienna";
        }
        
        clutter += `<div class="ball bubble" style="background-color: ${color};">${rn}</div>`;
    }
    document.querySelector("#panelB").innerHTML=clutter;

}


function runTimer(){
   var timerint= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
       else{
            clearInterval(timerint);

            document.querySelector("#panelB").innerHTML = `
            <div class="game-over">
                <h1>Game Over</h1>
                <p>Your score is: <span id="finalScore">${score}</span></p>
                <button id="restartBtn">Restart</button>
            </div>`;

            document.querySelector("#restartBtn").addEventListener("click", function() {
                score = 0;
                timer = 60;
                document.querySelector("#scoreval").textContent = score;
                document.querySelector("#timerval").textContent = timer;
                makeBubble();
                runTimer();
                getNewhit();
            });

       }
    },1000)
}
 
function increseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent =score;
}

//event bubbling

document.querySelector("#panelB").addEventListener("click", function(dets){
   var clickednum= Number(dets.target.textContent);
   if(clickednum===hitrn){
    increseScore();
    makeBubble();
    getNewhit();
   }
})


makeBubble();
runTimer();
getNewhit();


