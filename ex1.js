"use strict"
function validate()
{
	let val1 = document.getElementById("val1").value;
	let val2 = document.getElementById("val2").value;
	if((val1 == val2) && (val1.length >= 8))
	{
		alert("Password is Valid");
	}
	else if((val1.length < 8) || (val2.length < 8))
	{
		alert("Passwords must be at least 8 characters");
	}
	else
	{
		alert("Passwords do not match");
	}
}