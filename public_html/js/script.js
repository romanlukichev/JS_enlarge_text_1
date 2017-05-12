/*
    events - things that happens on your website
 
    this
 */



function incraseSize()
{ 
   resultElement.style.fontSize = "200%";
   /*resultElement.style.fontStretch = "ultra-expanded";*/
}

function decreaseSize()
{  
   resultElement.style.fontSize = "100%";
   /*resultElement.style.fontStretch = "ultra-condensed";*/
}

var resultElement = document.getElementById("result");
var plusElement = document.getElementById("plus");
var minusElement = document.getElementById("minus");

plusElement.onclick = incraseSize;

minusElement.onclick = decreaseSize;
