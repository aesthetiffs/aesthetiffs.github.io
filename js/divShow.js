function showNext() {
	  $("#main-right").slideToggle("slow");
	  $("#main-right").css("display","block");
	  $("#main-left").css("display","none");
}

function showBack() {
	// $("#main-left").slideToggle("slow");
	  $("#main-left").css("display","block");
	  $("#main-right").css("display","none");
}
