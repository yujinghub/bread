$span = $(".celan_nav span");
$spans = $(".bread_nav span");
$ols = $(".bread_content_jieshao ol")
console.log($ols);
$span.click(function(e) {
	e = e || window.event;
	var target = e.target || e.srcElement;
	if($(target).parent().hasClass("closed")) {
		$(target).parent().attr("class", "open");
		$(target).parent().prev().attr("class", "closed");
		$(target).css("color", "#92120f");
	} else {
		$(target).parent().attr("class", "closed");
		$(target).css("color", "");
	}
	$j = $(target).attr("zdy");
	for(var i = 0; i < $spans.length; i++) {
		$spans[i].className = "";
	}
	$spans[$j].className = "active"
	for(var i = 0; i < $ols.length; i++) {
		$ols[i].className = "";
	}
	$ols[$j].className = "active"
})