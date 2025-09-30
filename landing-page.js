let nameInput = document.querySelector('.js-input')

nameInput.addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    let userName = nameInput.value
    localStorage.setItem('name', userName)
    window.location.href = 'productivity.html'
  }
  console.log(event.key)
})


let savedName = localStorage.getItem('name')

let continueButton = document.querySelector('.js-continue-button')

