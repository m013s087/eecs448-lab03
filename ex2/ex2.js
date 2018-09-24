"use strict"
let now = 1;
let slide = Document.getElementById("pic");
let val = ["img1.jpeg","img2.png","img3.jpg","img4.jpg","img5.png"]
let total = val.length
function next()
{
	
	if(now == total)
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
	if(now == 1)
	{
		now =  total;
	}
	else
	{
		now--;
	}
	change()
}

function change()
{
	// alert("NOW: "+ now);
	slide.src=val[now-1];
}