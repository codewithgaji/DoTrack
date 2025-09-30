let savedName = localStorage.getItem('name' || "Not found")
let hello = document.querySelector('.js-hello')

let intervalId;
let timer = 0;

hello.innerHTML += `Hello ${savedName}`
console.log(hello)

let beginButton = document.querySelector('.js-begin-button')
let shownTime = document.querySelector('.js-shown-time')
let timeSelected = document.querySelector('.js-time-selected')// We are assigning this in here so we won't be getting the value of this immediately the website opens.

beginButton.addEventListener('click', )



function begin(){
  console.log(timeSelected.value)
  timer = Number(timeSelected.value) * 60 * 60 // This is to make it in form of hours.
  shownTime.innerHTML = `Productivity Started: ${formatTime(timer)}`

  clearInterval(intervalId)
  intervalId = setInterval(countdown, 1000)
}




timeSelected.addEventListener('keydown', (event)=> {
  if (event.key === 'Enter'){
    event.preventDefault() // This is used to stop the site from reloading which actually happens when the "Enter" key is being pressed.
    begin();
  }
})



function countdown (){
  if(timer >= 0){
    timer --;
    shownTime.innerHTML = `Time left: ${formatTime(timer)} seconds`
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

