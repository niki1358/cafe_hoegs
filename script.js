window.addEventListener("load", sidenVises);


function sidenVises() {
	console.log("sidenVises");

	document.querySelector("#menuKnap").addEventListener("click", toggleMenu);


}


function toggleMenu() {
	console.log("toggleMenu");
	document.querySelector("#menu").classList.toggle("hidden");

	let erSkjult = document.querySelector("#menu").classList.contains("hidden");

	if (erSkjult == true) {
		document.querySelector("#menuKnap").textContent = "☰";
	} else {
		document.querySelector("#menuKnap").textContent = "X";
	}
}
