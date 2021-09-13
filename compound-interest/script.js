const principalBox = document.querySelector("#principal")
const interestBox = document.querySelector("#rate")
const timesBox = document.querySelector("#timescompounded")
const yearsBox = document.querySelector("#years")
const interestSpan = document.querySelector("#interest")

function computeInterest(){
  const principal = principalBox.nodeValue
  const rate = interestBox.nodeValue
  const times = timesBox.nodeValue
  const years = yearsBox.nodeValue
  const calculatedInterest = principal * (1 + (rate/years))**(years*timescompounded)
  interestSpan.textContent = calculatedInterest
}

principalBox.addEventListener('input', computeInterest)
interestBox.addEventListener('input', computeInterest)
timesBox.addEventListener('input', computeInterest)
yearsBox.addEventListener('input', computeInterest)
