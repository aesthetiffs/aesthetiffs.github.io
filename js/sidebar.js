/* Set the width of the side navigation to 250px */
// later need to make this more dynamic by changing the size of the div for each breakpoint rather than the width 

function openNav() {
  if (window.matchMedia("(max-width: 992px)").matches) {
	document.getElementById("sidebarMenu").style.width = "100vw";
  }
  else {
    document.getElementById("sidebarMenu").style.width = "35vw";
  }
  document.getElementById("main-left").style.backgroundColor = "rgba(0, 0 , 0, .3)";
  document.getElementById("main-right").style.backgroundColor = "rgba(0, 0 , 0, .3)";
  // document.getElementById("main-other").style.backgroundColor = "rgba(0, 0 , 0, .3)";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sidebarMenu").style.width = "0";
  document.getElementById("main-left").style.backgroundColor = "rgba(0, 0 , 0, 0)";
  document.getElementById("main-right").style.backgroundColor = "rgba(0, 0 , 0, 0)";
  // document.getElementById("main-other").style.backgroundColor = "rgba(0, 0 , 0, 0)";
}
