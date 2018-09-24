"use strict"
let total = 5;
let now = 1;
let img = Document.getElementById("pic");
let text = ["Image 1","Image 2","Image 3","Image 4","Image 5"];
img.src="img1.jpeg";
function next()
{
	if(now === total)
	{
		now = 1;
	}
	else
	{
		now++;
	}
	change()
}

function prev()
{
	if(now === 1)
	{
		now = total;
	}
	else
	{
		now--;
	}
	change()
}

function change()
{
	img.src="img1.jpeg";
	img.alt=text[now-1];
}