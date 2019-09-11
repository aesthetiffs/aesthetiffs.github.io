$(".bar").mouseover(function() {
	var notThis = $(this).siblings('.bar');
	$(this).css({"opacity":"1", "height":"39%"});
	$(notThis).css({"height":"20%"});
	}).mouseout(function() {
	var notThis = $(this).siblings('.bar');
	$(this).css({"opacity":"0.3", "height":"25%"});
	$(notThis).css({"opacity":"0.3", "height":"25%"});
	});


$(".socialButton").mouseover(function() {
    $(this).css({"color":"#00a7c4"});
	}).mouseout(function() {
    $(this).css({"color":"#ababab"});
});
