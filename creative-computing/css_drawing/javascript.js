var teacupone = document.getElementById("teacupone")
var teacuptwo = document.getElementById("teacuptwo")
var teacupthree = document.getElementById("teacupthree")
var first = document.getElementById("first")

document.addEventListener("click", clickChangeColor)

function clickChangeColor(evt) {
	var target = event.target
	target.style.backgroundColor = "white"
	target.style.borderColor = "white"
}


document.addEventListener("keydown",keyDownTilt)

function keyDownTilt(evt) {
	var key = evt.key
	teacuptwo.style.transform = "rotate(30deg)"
	}
