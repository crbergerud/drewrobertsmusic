console.log("js file loading");

function myFunction() {
	console.log("myFunction() called");	
	var x, y
	console.log("hello there");
	alert("hi christine");
	x = 1;
	y = 2;
	var z = 3;
	var sum = x + y + z;
	var s1 = "hi ";
	var s2 = "there";
	var s3 = s1+s2;
	console.log("the sum of the vars is ="+sum);
}

var isVisible = true; //state variable
var theElement = document.getElementById("theBox");

function toggleIt(){
	console.log("toggleIt() called isVisible = "+isVisible);
	if ( isVisible == true ){
		console.log("here1");
		// hide it
		theElement.style.visibility = "hidden";
		isVisible = false;
		console.log("out isVisible="+isVisible);
	}
	else {
		console.log("here2");
		//show it
		theElement.style.visibility = "visible";
		isVisible = true;
		console.log("out isVisible="+isVisible);
	}

}


function initialize(){
	console.log("initialize() called e="+theElement);		
	theElement.style.visibility = "hidden"
	isVisible = false;
}

initialize();
console.log("js file loaded");