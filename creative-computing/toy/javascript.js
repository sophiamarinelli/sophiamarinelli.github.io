var button = document.getElementById("button")
button.addEventListener("click", clickButton)

function clickButton(evt) {

var random = Math.floor(Math.random()*6)
console.log(random)


var mashcow = document.getElementsByClassName("mash")
console.log(mashcow)
console.log(mashcow[random])

var mashRandom = mashcow[random]
var mashResult = mashRandom.getAttribute("value")

var randomField = Math.floor(Math.random()*3)
var spouse = document.getElementsByClassName("spouse")
var spouseRandom = spouse[randomField]
console.log(spouseRandom)
var spouseResult = spouseRandom.value
console.log(spouseResult)

var randomField = Math.floor(Math.random()*3)
var income = document.getElementsByClassName("income")
var incomeRandom = income[randomField]
console.log(incomeRandom)
var incomeResult = incomeRandom.value
console.log(incomeResult)

var randomField = Math.floor(Math.random()*3)
var city = document.getElementsByClassName("city")
var cityRandom = city[randomField]
console.log(cityRandom)
var cityResult = cityRandom.value
console.log(cityResult)

var randomField = Math.floor(Math.random()*3)
var job = document.getElementsByClassName("job")
var jobRandom = job[randomField]
console.log(jobRandom)
var jobResult = jobRandom.value
console.log(jobResult)

var randomField = Math.floor(Math.random()*3)
var pet = document.getElementsByClassName("pet")
var petRandom = pet[randomField]
console.log(petRandom)
var petResult = petRandom.value
console.log(petResult)

var randomField = Math.floor(Math.random()*3)
var car = document.getElementsByClassName("car")
var carRandom = car[randomField]
console.log(carRandom)
var carResult = carRandom.value
console.log(carResult)

var randomField = Math.floor(Math.random()*3)
var children = document.getElementsByClassName("children")
var childrenRandom = children[randomField]
console.log(childrenRandom)
var childrenResult = childrenRandom.value
console.log(childrenResult)

var futureResult = document.getElementById("futureresult")
var futureString = "You will live in " + mashResult;
futureString = futureString + " You will marry " + spouseResult + ".";
futureString = futureString + " You will make " + incomeResult + " dollars per year."
futureString = futureString + " You will live in " + cityResult + "."
futureString = futureString + " You will work as a " + jobResult + "."
futureString = futureString + " You will have a " + petResult + " as a pet."
futureString = futureString + " You will drive a " + carResult + "."
futureString = futureString + " You will have " + childrenResult + " children."


futureResult.innerHTML = futureString;


console.log("!")

}

var startAgain = document.getElementById("buttontwo")
startAgain.addEventListener("click", clearField)

function clearField(evt) {
document.getElementById("spouseone").value = ""
document.getElementById("spousetwo").value = ""
document.getElementById("spousethree").value = ""
document.getElementById("incomeone").value = ""
document.getElementById("incometwo").value = ""
document.getElementById("incomethree").value = ""
document.getElementById("cityone").value = ""
document.getElementById("citytwo").value = ""
document.getElementById("citythree").value = ""
document.getElementById("petone").value = ""
document.getElementById("pettwo").value = ""
document.getElementById("petthree").value = ""
document.getElementById("jobone").value = ""
document.getElementById("jobtwo").value = ""
document.getElementById("jobthree").value = ""
document.getElementById("carone").value = ""
document.getElementById("cartwo").value = ""
document.getElementById("carthree").value = ""
document.getElementById("childone").value = ""
document.getElementById("childtwo").value = ""
document.getElementById("childthree").value = ""
futureresult.innerHTML = ""
}





