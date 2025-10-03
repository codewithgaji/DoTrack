let savedName = localStorage.getItem('name' || "Not found")
let hello = document.querySelector('.js-hello')

let intervalId;
let timer = 0;

hello.innerHTML += `Hello ${savedName}`
console.log(hello)

const beginButton = document.querySelector('.js-begin-button')
const pauseButton = document.querySelector('.js-pause-button')
const stopButton = document.querySelector('.js-stop-button')



let shownTime = document.querySelector('.js-shown-time')
let timeSelected = document.querySelector('.js-time-selected')// We are assigning this in here so we won't be getting the value of this immediately the website opens.

document.body.addEventListener('keydown', (event)=> {
  if(event.key === 'p'){
    pause();
  }
  else if(event.key === 'b'){
    begin();
  }
  else if(event.key === 'Enter'){
    event.preventDefault();
    begin();
  }
  console.log(event.key)
})



beginButton.addEventListener('click', begin)
pauseButton.addEventListener('click', ()=>{
  if(pauseButton.classList.contains('js-continue-clicked')){
    continueNow();
  }
  else {
    pause(); // If not, leave at pause.
  }
})
stopButton.addEventListener('click', ()=> {
  stop();
})



function begin(){
  beginButton.classList.add('js-begin-clicked')
  setTimeout(() => {
    beginButton.classList.remove('js-begin-clicked')
  }, 200);
  timer = Number(timeSelected.value) * 60 * 60// This is to make it in form of hours.
  console.log(timer)
  setTimeout(()=>{
    timeSelected.value = ''
  }, 300)
  shownTime.innerHTML = `Productivity Started: ${formatTime(timer)}`
  clearInterval(intervalId)
  intervalId = setInterval(countdown, 1000)
}



function pause(){
  pauseButton.classList.add('js-pause-clicked')
  setTimeout(() => {
      pauseButton.classList.remove('js-pause-clicked')
      pauseButton.classList.add('js-continue-clicked')
    }, 200);
  shownTime.innerHTML = `Time Paused: ${formatTime(timer)} seconds`
  clearInterval(intervalId)
  pauseButton.innerHTML = 'Continue'
  // pauseButton.classList.add('js-continue-button')
}

function continueNow(){
  pauseButton.classList.remove('js-continue-clicked')
  pauseButton.innerHTML = 'Pause'
  intervalId = setInterval(countdown, 1000)
  console.log(intervalId)
  shownTime.innerHTML = `Timer Continued ${formatTime(timer)}`
}



function stop(){
  stopButton.classList.add('js-stop-clicked')
  setTimeout(()=>{
    shownTime.innerHTML = ''
  }, 5000)
  setTimeout(()=>{
    stopButton.classList.remove('js-stop-clicked')
  }, 200)
  clearInterval(intervalId)
  shownTime.innerHTML = `Wow, I can't believe you would quit early at ${formatTime(timer)}`
}


let timerchecker = 0;
function countdown (){
  if(timer >= 0){
    timer --;
    timerchecker ++;
    if (timerchecker === 3600/*This represents an hour*/){
      pause();
      shownTime.innerHTML = `You have used ${formatTime(timer)}hrs. Take a rest`
    }

    else {
      shownTime.innerHTML = `Time left: ${formatTime(timer)} seconds`
    }
  }

  else{
    clearInterval(intervalId)
    shownTime.innerHTML = "Productivity Complete🎉"
  }

}




function formatTime(seconds){ // Creating a format for the time we currently get in seconds which is 'timer'
  let hrs = Math.floor(seconds/3600)
  let mins = Math.floor((seconds%3600)/ 60)
  let secs = seconds % 60

  // This is padding with leading zeros (e.g. 02:04:12)
  return `${hrs.toString().padStart(2, '0')}: ${mins.toString().padStart(2, '0')}: ${secs.toString().padStart(2, '0')}`
}

