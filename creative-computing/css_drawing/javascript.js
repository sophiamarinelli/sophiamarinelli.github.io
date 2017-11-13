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


document.addEventListener("keydown",keyDownTextField)

function keyDownTextField(evt) {
	var key = evt.key
	alert(key + " \n\n\nIs that all you have to say darling?")

	}
