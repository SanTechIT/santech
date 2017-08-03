function toggled() {
	"use strict";
	var toggleone = document.getElementById("body"); 
	
	var togglefbt = document.getElementById("fbt");
	var togglea = document.getElementById("a");
	var toggleb = document.getElementById("b");
	var togglec = document.getElementById("c");
	var toggled = document.getElementById("d");
	var togglethree= document.getElementById("nav");
	
	toggleone.className = "dark";
	togglefbt.className = "dark";
	togglea.className = "dark";
	toggleb.className = "dark";
	togglec.className = "dark";
	toggled.className = "dark";
	
	togglethree.className = "dark"; 

}
function togglel() {
	"use strict";
	var toggleone = document.getElementById("body"); 
	
	var togglefbt = document.getElementById("fbt");
	var togglea = document.getElementById("a");
	var toggleb = document.getElementById("b");
	var togglec = document.getElementById("c");
	var toggled = document.getElementById("d");

	var togglethree= document.getElementById("nav");
	
	toggleone.className = "light";
	togglefbt.className = "light";
	togglea.className = "light";
	toggleb.className = "light";
	togglec.className = "light";
	toggled.className = "light";

	togglethree.className = "light"; 

}
function toggleld() {
	"use strict";
	if(document.getElementById("body").className === "light"){
		toggled();
	} else {
		togglel();
	}
}