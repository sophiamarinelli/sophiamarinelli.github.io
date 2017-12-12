var form = document.getElementById("form")
form.addEventListener("submit", clickButton)

function clickButton(evt) {
evt.preventDefault()
alert("!")
}

	<p class="mash" id="m" value="a mansion!">M</p>
	<p class="mash" id="a" value="an apartment!">A</p>
	<p class="mash" id="s" value="a shack!">S</p>
	<p class="mash" id="h" value="a house!">H</p>
	<p class="mash" id="c" value="a cottage!">C</p>
	<p class="mash" id="o" value="an outhouse!">O</p>
	<p class="mash" id="w" value="the whitehouse!">W</p>