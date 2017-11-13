var now =new Date()
var hour = now.getHours()

console.log(now.getHours())
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var seven = document.getElementById("seven")
var eight = document.getElementById("eight")
var nine = document.getElementById("nine")
var ten = document.getElementById("ten")
var eleven = document.getElementById("eleven")
var twelve = document.getElementById("twelve")
var link = document.getElementById("link")

if (hour>11) {
	one.style.backgroundColor = "#FFFE00"
	two.style.backgroundColor = "#FF8A00"
	three.style.backgroundColor = "#FFBFBF"
	four.style.backgroundColor = "#FF0000"
	five.style.backgroundColor = "#FFB881"
	six.style.backgroundColor = "#F2C3DB"
	seven.style.backgroundColor = "#FF4700"
	eight.style.backgroundColor = "#F0438E"
	nine.style.backgroundColor = "#FFE25E"
	ten.style.backgroundColor = "#F58787"
	eleven.style.backgroundColor = "#FF0085"
	twelve.style.backgroundColor = "#FFB054"

} else {

}

if (hour == 0 || hour == 12) {
	twelve.style.fontSize = "150px"
	twelve.style.backgroundColor = "black"
} else if (hour == 1 || hour == 13) {
	one.style.fontSize = "150px"
	one.style.backgroundColor = "black"
} else if (hour == 2 || hour ==14) {
	two.style.fontSize = "150px"
	two.style.backgroundColor = "black"
} else if (hour == 3 || hour == 15) {
	three.style.fontSize = "150px"
	three.style.backgroundColor = "black"
} else if (hour == 4 || hour == 16) {
	four.style.fontSize = "150px"
	four.style.backgroundColor = "black"
} else if (hour == 5 || hour == 17) {
	five.style.fontSize = "150px"
	five.style.backgroundColor = "black"
} else if (hour == 6 || hour == 18) {
	six.style.fontSize = "150px"
	six.style.backgroundColor = "black"
} else if (hour == 7 || hour == 19) {
	seven.style.fontSize = "150px"
	seven.style.backgroundColor = "black"
} else if (hour == 8 || hour == 20) {
	eight.style.fontSize = "150px"
	eight.style.backgroundColor = "black"
} else if (hour == 9 || hour == 21) {
	nine.style.fontSize = "150px"
	nine.style.backgroundColor = "black"
} else if (hour == 10 || hour == 22) {
	ten.style.fontSize = "150px"
	ten.style.backgroundColor = "black"
} else if (hour == 11 || hour == 23) {
	eleven.style.fontSize = "150px"
	eleven.style.backgroundColor = "black"
}
 



function update() {
	var now = new Date()
	var seconds = now.getSeconds()
	var xPos = seconds * 10

	one.style.right = xPos + "px"
	two.style.top = xPos + "px"
	three.style.top = xPos + "px"
	three.style.left = xPos + "px"
	four.style.left = (1.5*xPos) + "px"
	five.style.top = (3*xPos) + "px"
	five.style.left = (1.25*xPos) + "px"
	six.style.right = xPos + "px"
	seven.style.left = (.5*xPos) + "px"
	eight.style.bottom = (2*xPos) + "px"
	nine.style.bottom = xPos + "px"
	nine.style.right = (.4*xPos) + "px"
	ten.style.right = xPos + "px"
	ten.style.top = (2*xPos) + "px"
	eleven.style.bottom = (4*xPos) + "px"
	eleven.style.right = xPos + "px"
	twelve.style.top = (3*xPos) + "px"
	link.style.left = (xPos*3) + "px"

	one.style.transform ="rotate(20deg)"
	seven.style.transform = "rotate(80deg)"
	ten.style.transform = "rotate(-30deg)" 

}

setInterval(update, 500)

one.addEventListener("click", handleDocumentClick)
two.addEventListener("click", handleDocumentClick)

function handleDocumentClick() {
	one.style.backgroundColor = "white"
}

function handleDocumentClick() {
	two.style.backgroundColor = "white"
}

console.log("!")










