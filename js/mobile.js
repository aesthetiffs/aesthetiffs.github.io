// Makes responsive display of the chevron

function myFunction(x) {
  if (x.matches) { // If media query matches
	document.getElementById("main-right").style.display = "none";
	
  } else {
    document.getElementById("main-left").style.display = "block";
	document.getElementById("main-right").style.display = "block";
  }
}

var x = window.matchMedia("(max-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
