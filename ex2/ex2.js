"use strict"
let now = 1;
let val = ["img1.jpeg","img2.png","img3.jpg","img4.jpg","img5.png"];
let total = 5;

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
		now =  total;
	}
	else
	{
		now--;
	}
	change();
}

function change()
{
	document.getElementById("pic").src=val[now-1];
}