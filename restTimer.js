// let time = (document.getElementById('timer-count').innerHTML) - 1;

function initiate(){

  let howLong = prompt("How long of a timer would you like?");

  document.getElementById('count').innerHTML = howLong + " ";

  document.getElementById('timer-count').innerHTML = howLong;

  let time = howLong - 1;

  const reset = time + 1;

  let started = false;

  function begin(){
    if(started === false){
      started = true;
      let timer = setInterval(startTimer, 1000);  

      function startTimer(){
        document.getElementById('timer-count').innerHTML = time;
        if(time <= 0){
          stopTimer();
          // resetTimer();
        } else if(time > 0){
            time -=1;
        }
      }
                            
      function stopTimer(){
        clearInterval(timer);
        started = false;
      }

      function resetTimer(){
        stopTimer();
        document.getElementById('timer-count').innerHTML = reset;
        time = reset - 1;
        // stopTimer();
      }

      document.getElementById("stop-btn").addEventListener("click", stopTimer);
      document.getElementById("reset-btn").addEventListener("click", resetTimer);
    }
  }

  document.getElementById("start-btn").addEventListener("click", begin);
  document.getElementById("new-btn").addEventListener("click", initiate);
}

initiate();