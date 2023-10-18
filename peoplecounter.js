let nrOfPeople = document.getElementById("nrof-people")
let previousResults = document.getElementById("previous-results")
let count = 0

function increment(){
    count += 1
    nrOfPeople.textContent = count 
}

function save(){
    nrOfPeople.textContent = count
    previousResults.textContent += " - " + count 
    count = 0
}