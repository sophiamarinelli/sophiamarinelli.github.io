function updateTime(clockHolder) {
	var clockHolder = document.getElementById("clock")

	var now = new Date()
	var seconds = now.getSeconds()
	now = now.toTimeString()


	if (seconds < 20) {
		//blue
		clockHolder.style.color = "blue"
	} else if (seconds < 40) {
		//yellow
		clockHolder.style.color = "yellow"
	} else {
		//red
		clockHolder.style.color = "red"
	}

	clockHolder.innerHTML = now

	clockHolder.style.fontFamily = "Helvetica"
	clockHolder.style.fontSize = "300px"
	clockHolder.style.marginTop = "0px"
	clockHolder.style.border = "100px"
}

setInterval(updateTime, 1000)