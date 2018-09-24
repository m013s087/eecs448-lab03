"use strict"
function change()
{
	let borderColor = document.getElementById("borderColor").value;
	let width = document.getElementById("borderWidth").value;
	let backColor = document.getElementById("backColor").value;
	let p=document.getElementById("target")
	p.style.borderStyle="solid"
	p.style.borderColor=borderColor;
	p.style.borderWidth=width;
	p.style.backgroundColor=backColor;
}