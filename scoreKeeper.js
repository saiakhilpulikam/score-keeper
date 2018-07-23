var sp1 = 0;
var sp2 = 0;
var ws = 5;

var p1 = document.querySelector("#p1");

var p2 = document.getElementById("p2");

var h1 = document.querySelector("h1");

var p = document.querySelector("p");

var p1d = document.querySelector("#p1d");
var p2d = document.querySelector("#p2d");


p.addEventListener("keypress", function(){
	p.textContent = "Playing to"+ input;
})

p1.addEventListener("click", function(){

	if(sp1 < ws) {
		sp1 += 1;
		p1d.textContent = sp1;
	}
	else if (sp1 === ws) {
		p1d.classList.add("winner");
	}
	
})

p2.addEventListener("click", function(){

	if (sp2 ===ws) {
		p2d.classList.add("winner");
	}
	else {
		sp2 += 1;
	h1.textContent = sp2;
	}
})